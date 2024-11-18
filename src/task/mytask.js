import React, { useState } from 'react';

const CityList = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedCity = city.trim();


    if (trimmedCity === '') {
      setError('City name cannot be empty or only whitespace.');
    } else if (cities.includes(trimmedCity)) {
      setError('City name already exists.');
    } else {
      setCities([...cities, trimmedCity]);
      setCity('');
      setError('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Add City</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;