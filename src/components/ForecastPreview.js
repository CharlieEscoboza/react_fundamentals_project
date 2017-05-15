const moment = require('moment');
const React = require('react');

const ForecastPreview = ({ dt: date }) => {
  return (
    <h3>{moment(date * 1000).format('dddd, MMMM DD')}</h3>
  );
}

module.exports = ForecastPreview;
