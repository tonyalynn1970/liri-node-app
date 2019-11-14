
require("dotenv").config();
var keys = require("./key.js");
var Spotify = require('node-spotify-api');
const seatgeek = keys.seatgeek.id;
console.log(seatgeek);
var spotify = new Spotify(keys.spotify);

var fs = require("fs");


var command = process.argv[2];
var value = process.argv.slice(3).join("+");

switch (command) {
    case "concert-this":
        concertThis(value);
        break;
    case "spotify-this-song":
        spotifySong(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        doThis(value);
        break;
};

function concertThis(value) {


}

function spotifySong(value) {

}

function movieThis(value) {

}

function doThis(value) {
}


const moment = require('moment');
moment().format();

const axios = require('axios');




// Then run a request with axios to the OMDB API with the movie specified
const movieName = "Jaws";
var queryUrl = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.

console.log(queryUrl);


axios.get(queryUrl).then(
    function (response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("Ratings: " + response.data.Ratings[0].Value);
        console.log("Ratings: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    });
