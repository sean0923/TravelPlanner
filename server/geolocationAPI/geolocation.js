var request = require('request');
var config;
<<<<<<< HEAD
try {
  config = require('../../config.js');
} catch (e) {
  config = undefined;
=======
if ( process.env.NODE_ENV !== 'production' ) { // if we are not at heroku
  var config = require('../../config.js');
>>>>>>> 1c06d97c41c2b1591d85dba55d59ef3769b3bb86
}

var requestGeolocation = function(location, callback) {
  var key = process.env.GEO_API || config.geolocationAPI;
  var geoUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + key;

  request(geoUrl, function(error, response, body) {
    callback(JSON.parse(body));
  });
}

module.exports.requestGeolocation = requestGeolocation;
