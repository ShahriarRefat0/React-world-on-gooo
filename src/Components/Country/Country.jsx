import React, { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVIsitedCountries, handelVisitedFlag }) => {
  const [visited, setVisited] = useState(false);

  const handelVisited = () => {
    //1st
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true)
    // }

    //2nd
    // { visited ? setVisited(false) : setVisited(true) }
    //setVisited(visited ? false : true)

    // 3rd
    setVisited(!visited);
    handleVIsitedCountries(country);
  };

  return (
    // <div className={`country ${visited ? 'country-visited' : 'country-not- visited'}`}>
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handelVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={()=>{handelVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
    </div>
  );
};

export default Country;