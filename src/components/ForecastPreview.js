const moment = require('moment');
const React = require('react');

const Link = require('react-router-dom').Link;

const ForecastPreview = ({ city = {}, children, item }) => {
  const icon = item.weather.length ? item.weather[0].icon : '';
  const formatedDate = moment(item.dt * 1000).format('dddd, MMMM DD');

  return (
    <Link className="forecast-detail" to={{
        pathname: `/details/${city.name}`,
        state: {city, item}
      }}>
      <div className="image-container">
        <img src={`//openweathermap.org/img/w/${icon}.png`}/>
      </div>
      <h3>{formatedDate}</h3>
      {children}
    </Link>
  );
}

module.exports = ForecastPreview;
