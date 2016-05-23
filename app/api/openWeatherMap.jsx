var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6152ad6248d280568bbcabdec27d0b65&units=imperial';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requstUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requstUrl).then(function (response) {
			if(response.data.cod && response.data.message){
				throw new Error(response.data.message);
			} else{
				return response.data.main.temp
			}
		}, function (response) {
			throw new Error(response.data.message);
		});
	}
}
