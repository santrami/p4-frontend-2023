import { useEffect, useState } from "react";

type resultProps = {
  id: Number;
  image: string;
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

        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page + 1)}
        >
          Page {page + 1}
        </button>
      </header>
    </>
  );
}

const URL1 = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2&api_key=${
  import.meta.env.VITE_API_TOKEN
}`;

export default function Country() {
  const [apiCall, setApiCall] = useState<resultProps[]>([]);
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
    <div>
      {
        <h1>
          {apiCall.map((country) => (
            <div key={country.id.toString()}>
              <img src={country.image} />
            </div>
          ))}
        </h1>
      }
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

/* import { useState, useEffect } from "react";

type resultProps = {
  name: string;
  gender: string;
};

export default function Country() {
  const [result, setResult] = useState([]);

  const api = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await data.json();
    setResult(jsonData);
  };

  useEffect(() => {
    api();
  }, []);

  console.log(result[0]);

  return (
    <div className="App">
      <h1>
        {result.map((value, index) => 
           (
            <div key={index}>
              { <div>{value}</div> }
            </div>
          )
        )}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
 */
