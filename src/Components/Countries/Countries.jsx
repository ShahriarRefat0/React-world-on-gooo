import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
const [visitedFlags,setVisitedFlag]= useState([])

  const handleVIsitedCountries = (country) => {
    
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries); 
  }


  const handelVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlag(newVisitedFlags);
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h3>Total country visited: {visitedCountries.length}</h3>
      <h3>Total Visited Flag: {visitedFlags.length}</h3>
      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            handleVIsitedCountries={handleVIsitedCountries}
            country={country}
            handelVisitedFlag={handelVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;