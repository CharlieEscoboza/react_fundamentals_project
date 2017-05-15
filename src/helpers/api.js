const axios = require('axios');

const API_KEY = '925b9453e53850659875ac409d045768';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q={CITY-NAME}&type=accurate&APPID=${API_KEY}&cnt=5`;

module.exports = {
  fetchData: function (cityName) {
    const url = API_URL.replace('{CITY-NAME}', cityName);
    return axios.get(encodeURI(url))
      .then(({ data }) => {
        return data;
      });
  }
};
