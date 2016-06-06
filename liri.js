//load the file system module
var fs = require('fs');
//load the twitter module
var Twitter = require('twitter');
 //load the Auth keys for Twitter
var keys = require('./keys.js')
//load the Spotify module
var spotify = require('spotify');
//load the request module
var request = require('request');


// Take two arguments 
var action = process.argv[2];
var value = process.argv[3];

// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
switch(action){
    case 'my-tweets':
        getTweets();
        break;
    case 'spotify-this-song':
        searchSpotify();
        break;
    case 'movie-this':
        searchMovie();
        break;
    case 'do-what-it-says':
        cmdFromTxt();
        break;
}
 
function getTweets() { 
//Create a new Twitter instance
var twitter = new Twitter(keys.twitterKeys);
twitter.get('statuses/user_timeline', {screen_name: 'jccruey', count: 20}, function(err, tweets, response){
  if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } else {
  	for (var i = 0; i < tweets.length; i++) {
  		console.log(tweets[i].created_at + " " + tweets[i].text)
  	}
  }
});
}

function searchSpotify() {
spotify.search({ type: 'track', query: value || "what's my age again" }, function(err, data) {
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
}

function searchMovie() {
	var queryUrl = 'http://www.omdbapi.com/?t=' + value || "Mr. Nobody" +'&y=&plot=short&r=json&tomatoes=true';
	request(queryUrl, function(err, response, body) {
	if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } else {
		body = JSON.parse(body);
		console.log(body);
		console.log("Title: " + body.Title);
		console.log("Year: " + body.Year);
		console.log("IMDB Rating: " + body.imdbRating);
		console.log("Country: " + body.Country);
		console.log("Language: " + body.Language);
		console.log("Plot: " + body.Plot);
		console.log("Actors :" + body.Actors);
		console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
		console.log("Rotten Tomatoes URL: " + body.tomatoURL);

	}
})
}


