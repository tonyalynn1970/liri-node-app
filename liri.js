const axios = require("axios");
require("dotenv").config();
var key = require("./key.js");
var Spotify = require('node-spotify-api');
const seatgeek = key.seatgeek.id;
var spotify = new Spotify(key.spotify);
const moment = require('moment');

var fs = require("fs");


var command = process.argv[2];
var value = process.argv.slice(3).join("+");
var valueHyphen = process.argv.slice(3).join("-");

switch (command) {
    case "concert-this":
        concertThis(valueHyphen);
        break;
    case "spotify-this-song":
        spotifySong(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        doThis();
        break;
};

function concertThis(valueHyphen) {
    var queryUrl = `https://api.seatgeek.com/2/events?client_id=${seatgeek}&performers.slug=${valueHyphen}`;
    axios.get(queryUrl).then(
        function (response) {
            //console.log(response.data.events[0].venue);
            if (response.data.events[0].venue != undefined) {
                console.log("Event Veunue: " + response.data.events[0].venue.name);
                console.log("Event Location: " + response.data.events[0].venue.city);
                var eventDateTime = moment(response.data.events[0].datetime);
                console.log("Event Date & Time: " + eventDateTime.format("dddd, MMMM Do YYYY"));
            }
            else {
                console.log("No results found.");
            }
        }
    ).catch(function (error) {
        console.log(error);
    });
}



function spotifySong(value) {

    var Spotify = require('node-spotify-api');

    var spotify = new Spotify({
        id: key.spotify.id,
        secret: key.spotify.secret,
    });

    spotify.search({ type: 'track', query: value }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //console.log(data);
        //console.log(data.items[0]);
        // console.log(data.tracks.items[0].name);
        for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
            if (i === 0) {
                console.log("Artist(s): " + data.tracks.items[0].artists[i].name);
            } else {
                console.log("         " + data.tracks.items[0].artists[i].name);
            }

        }
        console.log("Song:         " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
        console.log("Album:        " + data.tracks.items[0].album.name);


        /*         const song = data.tracks.items;
                for (let i = 0; i < song.length; i++) {
                    // console.log("inner loop", song[i].artists.join());
                    for (let j = 0; j < song[i].artists.length; j++) {
                        console.log(song[i].artists[j].name)
                    }
                } */

        // console.log(data);
    });


}



function movieThis(value) {

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


}

function doThis() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        // [spot..., "i wantiit ..."]
        var dataArr = data.split(',');
        if (dataArr[0] === "spotify-this-song") {
            spotifySong(dataArr[1]);
        }
        if (dataArr[0] === "concert-this") {
            concertThis(dataArr[1]);
        }
        if (dataArr[0] === "movie-this") {
            movieThis(dataArr[1]);
        }
    })
}












