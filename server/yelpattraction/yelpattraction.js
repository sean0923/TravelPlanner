const yelp = require('yelp-fusion');

var config;
try {
  config = require('../../config.js');
} catch (e) {
  config = undefined;
<<<<<<< HEAD
=======
var config;
if ( process.env.NODE_ENV !== 'production' ) { // if we are not at heroku
  var config = require('../../config.js');
>>>>>>> Fig bug related to require config.js
=======
>>>>>>> Fix heroku bug
}

var searchAttr = function(searchCity, callback) {

  var attrResult = {};
  const clientId = process.env.clientId || config.clientId;
  const clientSecret = process.env.clientSecret || config.clientSecret;

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
