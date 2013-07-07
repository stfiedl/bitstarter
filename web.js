var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
	var fs = require ('fs');

	var buff = new Buffer (256);
	buff = buf.toString(fs.readFileSync("index.html","utf-8")));

  	response.send();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
