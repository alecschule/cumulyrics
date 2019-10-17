const express = require('express');
const app = express();
const port = 3000;

// Endpoints
var artist_lookup = require('./artist-lookup.js')

// return list of artists matching a partial artist name 
// /artist-lookup?name=
app.use('/artist-lookup', artist_lookup);

// return JSON string of the form {“word1”: num1, “word2”: num2, … }
// app.get('/artist-lyrics', require('./artist-lyrics.js'));

app.listen(port);
