const express = require('express');
const app = express();
const port = 3000;

// return list of artists matching a partial artist name 
// /artist-lookup?name=
app.get('/artist-lookup', require('./artist-lookup.js'));

// return JSON string of the form {“word1”: num1, “word2”: num2, … }
// app.get('/artist-lyrics', require('./artist-lyrics.js'));

app.listen(port);
