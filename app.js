var express = require('express'),
	hue = require('./lib/hue'),
	app = express();

// app setup
var port = process.env.PORT || 3005;

// routes
app.use(express.static(__dirname + '/static'));

app.get('/api/allon', function(req, res) {
	hue.turnOn();
	res.send('All On');
});

app.get('/api/alloff', function(req, res) {
	hue.turnOff();
	res.send('All Off');
});

app.listen(port);