var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var HTMLRouts = require (path.join(__dirname, './public/routs/htmlRouts.js'))
var apiRouts = require (path.join(__dirname, './public/routs/apiRouts.js'))

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: 'application/vnd.api+json'
}))


HTMLRouts(app);
apiRouts(app);




app.listen(3000)


