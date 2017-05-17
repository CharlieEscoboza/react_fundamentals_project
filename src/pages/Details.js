import React from 'react';

import ForecastPreview from '../components/ForecastPreview';

const Details = (props) => {
  const { city = {}, item = {} } = props.location.state;

  return (
    <div className="column">
      <ForecastPreview item={item}>
        <ul className="detail-container">
          <li className="detail-item">{city.name}</li>
          <li className="detail-item">{item.weather[0].description}</li>
          <li className="detail-item">min temp: {item.temp.min}</li>
          <li className="detail-item">max temp: {item.temp.max}</li>
          <li className="detail-item">humidity: {item.humidity}</li>
        </ul>
      </ForecastPreview>
    </div>
  );
};

export default Details;
