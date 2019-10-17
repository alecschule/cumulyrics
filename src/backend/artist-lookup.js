// Given a partial artist name string, return an array of artists that match
module.exports = function(req, res) {
	res.send(req.query.name);
}

