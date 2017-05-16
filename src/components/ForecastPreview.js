const moment = require('moment');
const React = require('react');

const Link = require('react-router-dom').Link;

const ForecastPreview = ({ city = {}, dt: date, weather = [] }) => {
  const icon = weather.length ? weather[0].icon : '';

  return (
    <Link className="forecast-detail" to={{
        pathname: `/details/${city.name}`
      }}>
      <div className="image-container">
        <img src={`//openweathermap.org/img/w/${icon}.png`}/>
      </div>
      <h3>{moment(date * 1000).format('dddd, MMMM DD')}</h3>
    </Link>
  );
}

module.exports = ForecastPreview;
