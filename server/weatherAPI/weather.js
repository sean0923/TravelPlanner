var request = require('request');
<<<<<<< HEAD

var config;
try {
  config = require('../../config.js');
} catch (e) {
  config = undefined;
=======
var config;
if ( process.env.NODE_ENV !== 'production' ) { // if we are not at heroku
  var config = require('../../config.js');
>>>>>>> Fig bug related to require config.js
}

var requestWeather = function(geoCode, date, callback) {
  var secretKey = process.env.WEATHER_API || config.darkskyAPI;
  var unixTime = new Date(date).getTime() / 1000
  var weatherUrl = 'https://api.darksky.net/forecast/' + secretKey + '/' + geoCode.lat + ',' + geoCode.lng + ',' + unixTime + '?exclude=currently,minutely,hourly,flags'

  request(weatherUrl, function(error, response, body) {
    callback(body);
  });
}

module.exports.requestWeather = requestWeather;
