import { useEffect, useState } from "react";

type resultProps = {
  image: string;
  id: Number;
};

const URL1 = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2&api_key=${import.meta.env.VITE_API_TOKEN}`;

const URL2=`https://rickandmortyapi.com/api/character`; 
export default function Country() {
  const [apiCall, setApiCall] = useState<resultProps[]>([]);

  const apiData = async function fetchData() {
    const response = await fetch(URL2);
    const { results } = (await response.json()) as { results: resultProps[] };
    setApiCall(results);
  };

  useEffect(() => {
    apiData();
  }, []);

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
