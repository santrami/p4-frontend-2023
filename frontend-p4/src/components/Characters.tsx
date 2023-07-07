import { useEffect, useState } from "react";

type resultProps = {
  id: number;
  image: string;
  name: string;
};

type Pagination = {
  page: number;
  setPage: (page: number) => void;
};

function NavPage({ page, setPage }: Pagination) {
  return (
    <>
      <header className="d-flex justify-content-between align-items-center">
        <p>Page: {page}</p>

        <button className="button" onClick={() => setPage(page - 1)}>
          Page {page - 1}
        </button>

        <button className="button" onClick={() => setPage(page + 1)}>
          Page {page + 1}
        </button>
      </header>
    </>
  );
}

export default function Character() {
  const [apiCall, setApiCall] = useState<resultProps[]>();
  const [page, setPage] = useState(1);

  const URL2 = `https://rickandmortyapi.com/api/character?page=${page}`;
  const apiData = async function fetchData() {
    const response = await fetch(URL2);
    const { results } = (await response.json()) as { results: resultProps[] };
    setApiCall(results);
  };

  useEffect(() => {
    apiData();
  }, [page]);

  if (apiCall === undefined) {
    return null;
  }

  console.log(apiCall);

  return (
    <>
      <div className="flex flex-row">
        {
          <h1>
            {apiCall.map((char) => (
              <div key={char.id.toString()}>
                <img src={char.image} />
                {char.name}
              </div>
            ))}
          </h1>
        }
      </div>
      <NavPage page={page} setPage={setPage} />
    </>
  );
}
