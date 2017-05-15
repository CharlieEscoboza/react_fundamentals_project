const React = require('react');
const Link = require('react-router-dom').Link;
const WeatherForm = require('../components/WeatherForm');

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

module.exports = Header;
