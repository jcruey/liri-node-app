var Twitter = require('twitter');
 
var keys = require('./keys.js')

var twitter = new Twitter(keys.twitterKeys);
 
var params = {screen_name: 'jccruey'};
twitter.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(response.text);
  }
});