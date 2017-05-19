import moment from 'moment';
import React from 'react';

import { Link } from 'react-router-dom';

const ForecastPreview = ({ city = {}, children, item }) => {
  const icon = item.weather.length ? item.weather[0].icon : '';
  const formatedDate = moment(item.dt * 1000).format('dddd, MMMM DD');

  return (
    <Link className="forecast-detail" to={{
        pathname: `/details/${city.name}`,
        state: {city, item}
      }}>
      <div className="image-container">
        <img src={`https://crossorigin.me/http://openweathermap.org/img/w/${icon}.png`}/>
      </div>
      <h3>{formatedDate}</h3>
      {children}
    </Link>
  );
}

export default ForecastPreview;
