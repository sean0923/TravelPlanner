const yelp = require('yelp-fusion');
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
>>>>>>> 1c06d97c41c2b1591d85dba55d59ef3769b3bb86
}

var searchAttr = function(searchCity, callback) {

  var attrResult = {};
  const clientId = config.clientId;
  const clientSecret = config.clientSecret;

  const token = yelp.accessToken(clientId, clientSecret).then(response => {

    // console.log('TOKEN ', response.jsonBody.access_token);
  }).catch(e => {
    console.log('ERROR ', e);
  });

  var yelpToken = process.env.YELP_TOKEN || config.yelpToken;
  const client = yelp.client(yelpToken);

  client.search({
    term: 'Attractions',
    location: searchCity,
    limit: 12
  })
    .then(response => {
      attrResult = response.jsonBody.businesses;
      callback(attrResult);
    })
    .catch(e => {
      console.log(e);
    });
}

module.exports.searchAttr = searchAttr;
