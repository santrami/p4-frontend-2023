import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./Pagination";
import CharDetails from "./CharDetails";

type resultProps = {
  id: number;
  image: string;
  name: string;
  origin: {
    name: string;
  };
};

export default function Characters() {
  const [apiCall, setApiCall] = useState<resultProps[]>();
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] =
    useState<resultProps | null>(null);

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

  const handleCharacterClick = (character: resultProps) => {
    setSelectedCharacter(character);
  };

  console.log(apiCall);

  return (
    <>
      {selectedCharacter ? (
        <div className="flex flex-column justify-center text-center">
          <CharDetails
            name={selectedCharacter.name}
            origin={selectedCharacter.origin}
            image={selectedCharacter.image}
            onClick={() => setSelectedCharacter(null)}
          />
        </div>
      ) : (
        <>
          <NavPage page={page} setPage={setPage} />
          <div className="flex justify-center flex-wrap gap-5">
            {apiCall.map((char) => (
              <div key={char.id}>
                <Character
                  name={char.name}
                  origin={char.origin}
                  image={char.image}
                  onClick={() => handleCharacterClick(char)}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
