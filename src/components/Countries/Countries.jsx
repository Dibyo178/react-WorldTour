import { useEffect } from "react";
import { useState } from "react";

import Details from "../Details/Details";

import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisited = (countryVisited) => {
    console.log("Add this country");

    const newHandleVisited = [...visitedCountries, countryVisited];

    setVisitedCountries(newHandleVisited);
  };

  const handleVisitedFlags = (flags) => {


    const newVisitedFlags = [...visitedFlags, flags];

    console.log('Add flags');

    setVisitedFlags(newVisitedFlags);
  };

  return (
    <>
      <h3>Countries:{countries.length} </h3>

      <div>
        <h5>Visited Countries:{visitedCountries.length}</h5>

        <ul className="listName">
          {visitedCountries.map((data) => (
            <li key={data.cca3}>{data.name.common}</li>
          ))}
        </ul>
      </div>


      <div className="flag-container">
        {
        visitedFlags.map((flag,index) => 
          <img  key={index} src={flag.flags.png}/>
        )}
      </div>




      <div className="country-container">
        {countries.map((country) => (
          <Details
            key={country.cca3}
            handleVisitedFlags={handleVisitedFlags}
            handleVisited={handleVisited}
            country={country}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
