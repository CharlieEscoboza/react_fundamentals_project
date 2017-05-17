import React from 'react';
import { Link } from 'react-router-dom';
import WeatherForm from '../components/WeatherForm';

const Header = () => {
  return (
    <div className="row header">
      <div className="logo" >
        <Link to='/'>
          <h2>Weather App</h2>
        </Link>
      </div>
      <WeatherForm className="header-form" />
    </div>
  );
};

export default Header;
