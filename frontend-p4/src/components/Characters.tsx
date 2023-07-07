import { useEffect, useState } from "react";
import Character from "./Character";

type resultProps = {
  id: number;
  image: string;
  name: string;
  origin: string;
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

export default function Characters() {
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
      <div className="flex flex-column">
        {apiCall.map((char) => (
          <div className="flex-1" key={char.id.toString()}>
            <Character
              id={char.id}
              name={char.name}
              origin={char.origin}
              image={char.image}
            />
          </div>
        ))}
      </div>
      <NavPage page={page} setPage={setPage} />
    </>
  );
}
