var Express = require('express');
var Http = require('http');
var Path = require('path');
var BodyParser = require('body-parser');
var Request = require('superagent');
var app = Express();
var nock = require('nock');
var url = "http://some.mock.api";

app.use(BodyParser.json());

//Racing List mocks
require('./mock/endpoints/racing')(url, nock);

app.route('/api/*').all(function(req, routeRes) {
	Request(req.method, url+req.url)
	.end(function(err, res){
		if(err) {
			console.log(err)
			console.log(req.method)
			console.log(url+req.url)
			console.log(req.body)
			routeRes.json(err);
		} else {
			routeRes.json(res.body);
		}
	}); 
});

var port = normalizePort(process.env.PORT || 8080);
app.set('port', port);

var server = Http.createServer(app);
server.listen(port);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}
