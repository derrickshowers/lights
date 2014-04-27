var express = require('express'),
	app = express();

// app setup
var port = process.env.PORT || 3005;

// routes
app.use(express.static(__dirname + '/static'));

app.get('/api/allOn', function(req, res) {
	console.log('All On');
	res.send('All On');
});

app.get('/api/allOff', function(req, res) {
	console.log('All Off');
	res.send('All Off');
});

app.listen(port);