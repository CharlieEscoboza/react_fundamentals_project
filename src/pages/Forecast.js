import { parse } from 'query-string';
import React from 'react';

import ForecastPreview from '../components/ForecastPreview';
import Loading from '../components/Loading';

import fetchData from '../helpers/api';

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this._setForecast = this._setForecast.bind(this);
    this.state = {
      city: '',
      list: []
    };
  }

  _setForecast(weatherData) {
    const { city, list } = weatherData;

    this.setState({
      city,
      list
    });
  }

  componentDidMount() {
    const cityName = parse(this.props.location.search).city;

    fetchData(cityName)
    .then(this._setForecast);
  }

  render() {
    const { city, list } = this.state;

    return (
      <div className="page">
        {city.name && <h2>{city.name}</h2>}
        {!list.length && <Loading />}
        {list.length > 0 && (
          <div className="casts-container">
            {list.map((item, index) => {
              return <ForecastPreview key={index} city={city} item={item} />
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Forecast;
