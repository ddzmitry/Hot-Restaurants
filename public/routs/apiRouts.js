var path = require('path');

var reservations = require(path.join(__dirname, '../data/data.js'))

var waitlist = require(path.join(__dirname, '../data/waitlist.js'))
module.exports = function(app) {


	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, "../html/index.html"));
	});
	app.get('/view', function(req, res) {
		res.sendFile(path.join(__dirname, "../html/view.html"));
	});
	app.get('/make', function(req, res) {
		res.sendFile(path.join(__dirname, "../html/make.html"));
	});

	app.get('/api', function(req, res) {
		res.json(reservations)
	});

	app.get('/api/waitlist', function(req, res) {
		res.json(waitlist)
	});

	app.post('/api/new', function(req, res) {


		if (reservations.length > 5) {
			console.log('RESERVATION WAITLIST')
			waitlist.push(req.body)

		} else {
			console.log('RESERVATION LIST')
			reservations.push(req.body)
		}
		// console.log(req.body)


	});

	app.post('/api/clear', function(req, res) {
		
		while(reservations.length > 0) {
    reservations.pop();
}

		while(waitlist.length > 0) {
    waitlist.pop();
}
		


	});



};