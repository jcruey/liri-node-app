var Twitter = require('twitter');
 
var keys = require('./keys.js')

var spotify = require('spotify');

// var twitter = new Twitter(keys.twitterKeys);
 
// var params = {screen_name: 'jccruey', count: 20};
// twitter.get('statuses/user_timeline', params, function(error, tweets, response){
//   if (!error) {
//   	for (var i = 0; i < tweets.length; i++) {
//   		console.log(tweets[i].created_at + " " + tweets[i].text)
//   	}
//   }
// });

query = process.argv[2]; 
spotify.search({ type: 'track', query: query || "what's my age again" }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } else {
    	console.log('Artist(s): ' + data.tracks.items[0].artists[0].name)
        console.log('Song Name: ' + data.tracks.items[0].name);
        console.log('Preview Link: ' + data.tracks.items[0].preview_url);
        console.log('Album: ' + data.tracks.items[0].album.name);
    }
 	
   
});