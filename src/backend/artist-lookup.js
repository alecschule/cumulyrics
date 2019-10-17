const express = require('express')
var router = express.Router()

const request = require('request')
const config = require('./config.js')

const last_fm_endpoint = 'http://ws.audioscrobbler.com/2.0/'

router.get('/', function(req, res) {
    // Search artists on Last FM
    // Build the URL
    var url = last_fm_endpoint +
        '?method=artist.search&artist=' + req.query.name +
        '&api_key=' + config.last_fm_key +
        '&limit=5' +
        '&format=json'
    request(url, {json: true}, (error, response, body) => {
        if (error) {
        }
        var artist_names = parse_artists(body)
        res.send(artist_names)
    })
})

function parse_artists(body) {
    var artists = body["results"]["artistmatches"]["artist"]
    var names = []
    for (const artist of artists) {
        names.push(artist["name"])
    }
    return names
}

module.exports = router
