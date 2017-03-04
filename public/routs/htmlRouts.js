



var path = require('path');
var reservations = require(path.join(__dirname, '../data/data.js'))


var waitlist = require(path.join(__dirname, '../data/waitlist.js'))


// var db = 

module.exports = function (app) {



app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "../html/index.html"));
});
app.get('/view', function(req, res) {
	res.sendFile(path.join(__dirname, "../html/view.html"));
});
app.get('/make', function(req, res) {
	res.sendFile(path.join(__dirname, "../html/make.html"));
});



};