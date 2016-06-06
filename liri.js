var Twitter = require('twitter');
 
var keys = require('./keys.js')

var twitter = new Twitter(keys.twitterKeys);
 
var params = {screen_name: 'jccruey', count: 20};
twitter.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
  	for (var i = 0; i < tweets.length; i++) {
  		console.log(tweets[i].created_at + " " + tweets[i].text)
  	}
  }
});