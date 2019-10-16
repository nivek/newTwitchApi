const config = require('config')
const Twitch = require('./newTwitchApi')

// If you do not wish to install the config module
// replace any mention of config.get() with the corresponding credentials
// you must also do this in newTwitchApi.js

var options = {
  clientId: config.get('clientId'),
  clientSecret: config.get('clientSecret'),
  redirectUri: 'http://localhost',
  scopes: []
}

var ttv = new Twitch(options);

// All api calls will return a promise
var user = ttv.getUser({login: 'shroud'});

// Utilize .then in order to access the result of your api call.
user.then((result) => {
  console.log(result);
})
