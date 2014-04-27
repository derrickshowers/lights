var http = require('http');

var setAllLights = function(options, body) {
	
	options.method = 'PUT';
	
	for (var i=0; i<5; i++) {
		options.path = '/api/webinterface/lights/' + (i+1) + '/state';
		
		var req = http.request(options, function(res) {
			var responseData = '';
			res.on('data', function(chunk) {
				responseData += chunk;
			});
			res.on('end', function() {
				console.log(responseData);
			});
		});
		
		req.write(JSON.stringify(body));
		req.end();

	}

}

var Hue = {

	// defaults
	options: {
		host: '10.0.0.50'
	},

	turnOn: function() {
		var body = {
			'on': true
		}
		setAllLights(this.options, body);
	},

	turnOff: function() {
		var body = {
			'on': false
		}
		setAllLights(this.options, body);
	}

}

module.exports = Hue;