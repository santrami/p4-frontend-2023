import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./Pagination";

type resultProps = {
  id: number;
  image: string;
  name: string;
  origin: string;
};



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
