import React from 'react';

import WeatherForm from '../components/WeatherForm';

const Home = () => (
  <div className="home page">
    <h1>Enter a city and State</h1>
    <WeatherForm className="home-form" />
  </div>
);

export default Home;
