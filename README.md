#Week 10 (LIRI Bot)

### LIRI is a Language Interpretation and Recognition Interface.

* LIRI is a command line node app that takes in parameters and gives you back data from Twitter, Spotify and OMDB.

#### Arguments 

liri.js can take in one of the following arguments:

* my-tweets

* spotify-this-song

* movie-this

* do-what-it-says

running the following commands in your terminal will do the following things

```
node liri.js my-tweets
```
* will show your last 20 tweets and when they were created in the terminal

```
node liri.js spotify-this-song '<song name here>'
```

* shows the following information about the song in the terminal

	* artist(s)
	* song name
	* preview link of the song from spotify
	* album that the song is a part of
	* song name

* if no song is provided then liri will default to
	* "what's my age again" by blink 182

```
node liri.js movie-this '<movie name here>'
```

* this will output the following information to the terminal:

	* Title
	* Year
	* IMDB Rating
	* Country
	* Language
	* Plot
	* Actors
	* Rotten Tomatoes Rating 
	* Rotton Tomatoes UrL

	* if no movie is provided then liri will output information for the movie: 'Mr. Nobody'

```
node liri.js do-what-it-says 
```

* Using the fs package in node, the liri will take the text inside of random.txt and use it to call the first command with the second part as it's parameter

* Currently in random.txt, the following text is there:

```
spotify-this-song,"I Want it That Way"
```

* This should work for any function and paramter you use.

* In addition to outputting the data to the terminal, liri will also output all data to a txt file called log.txt

------