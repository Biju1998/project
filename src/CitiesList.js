import React, { useState, useEffect } from 'react';

function CitiesList({ selectedState, isSubmitted ,setSelectedCity}) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (selectedState) {
      fetch(`/api/v1/states/cities/${selectedState}`)
        .then((response) => response.json())
        .then((data) => setCities(data));
    }
  }, [selectedState, isSubmitted]);

  return (
    <div>
      <label>Select a city:</label><br></br>
      <select onChange={(e)=>setSelectedCity(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.cityId} value={city.cityName}>
            {city.cityName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitiesList;
