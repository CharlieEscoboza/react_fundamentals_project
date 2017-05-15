const React = require('react');

class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.timer = null;
    this._updateText = this._updateText.bind(this);
    this.state = {
      text: ''
    };
  }

  _updateText() {
    const { text } = this.state;
    const newState = {};

    if (text === '...') {
      newState.text = '';
    } else {
      newState.text = `${this.state.text}.`
    }

    this.setState(newState);
  }

  componentDidMount() {
    this.timer = setInterval(this._updateText, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <span>{`${this.props.message}${this.state.text}`}</span>
    );
  }
}

Loading.defaultProps = {
  message: 'Loading',
  speed: 300
}

module.exports = Loading;
