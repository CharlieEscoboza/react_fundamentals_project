const QueryString = require('query-string');
const React = require('react');

const ForecastPreview = require('../components/ForecastPreview');
const Loading = require('../components/Loading');

const { fetchData } = require('../helpers/api');

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
    const cityName = QueryString.parse(this.props.location.search).city;

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
              return <ForecastPreview key={index} city={city} {...item} />
            })}
          </div>
        )}
      </div>
    );
  }
}

module.exports = Forecast;
