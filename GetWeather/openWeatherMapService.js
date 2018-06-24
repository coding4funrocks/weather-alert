let axios = require('axios');

module.exports = {
    getWeather: function () {
        const openWeatherMapApiUrl = process.env.OpenWeatherMapApiUrl;

        console.log(openWeatherMapApiUrl);

        axios.get(openWeatherMapApiUrl)
            .then(function (result) {
                module.exports.processResponse(result);
            })
            .catch(error => console.log(error.data))
    },

    processResponse: function (response) {
        console.log(response.data);
    }
}