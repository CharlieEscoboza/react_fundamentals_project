const React = require('react');
const Link = require('react-router-dom').Link;

class WeatherForm extends React.Component {

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.state = {
      city: ''
    };
  }

  _handleSubmit() {
    return [];
  }

  _handleChange(evt) {
    this.setState({
      city: evt.target.value
    });
  }

  render () {
    return (
      <form className={`weather-form ${this.props.className}`} onSubmit={this._handleSubmit}>
        <input
          type="text"
          value={this.state.city}
          onChange={this._handleChange}
          placeholder={this.props.placeholder} />
        <Link className="button" to={{
          pathname: "/forecast",
          search: `?city=${this.state.city}`
        }}>
          Get weather
        </Link>
      </form>
    );
  }
}

WeatherForm.defaultProps = {
  className: '',
  placeholder: 'Santiago de los Caballeros'
};

module.exports = WeatherForm;
