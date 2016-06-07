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
        readFileExecute();
        break;
}

//function to get last 20 tweets from twitter module 
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

//function to search Spotify for info on song name passed as argument
function searchSpotify() {
var value = process.argv[3] || "what's my age again";
spotify.search({ type: 'track', query: value }, function(err, data) {
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

//funtion to search OMBD data for data on movie name passed as argument
function searchMovie() {
	var value = process.argv[3] || "Mr. Nobody";
	var queryUrl = 'http://www.omdbapi.com/?&y=&plot=short&r=json&tomatoes=true&t=' + value;
	request(queryUrl, function(err, response, body) {
	if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } else {
		body = JSON.parse(body);
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

//function to read text file and execute arguments
function readFileExecute() {
	//reads text files and returns contents to data
	fs.readFile("random.txt", "utf8", function(error, data) {
    // Then split it by commas to make arguments accessible
    var textArgs = data.split(',');
    
    // store arguments as var defined in switch function
 	action = textArgs[0];
 	value = textArgs[1];

})
};


