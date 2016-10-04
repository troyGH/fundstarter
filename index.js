#!/usr/bin/env node
var http = require('http');
var port = Number(process.env.PORT || 8080);
var fs = require('fs');
var buf = new Buffer(64 * 1024);
var filename = 'public/index.html';

var requestListener = function(req, res){
	//check if file exists
	fs.exists(filename, function(exists) {
	if(!exists) {
		res.writeHead(404, {"Content-Type": "text/html"});
		res.write("404 Not Found\n");
		res.end();
		return;
	}});

	fs.readFile(filename, function (err, data) {
   if (err) {
		 res.writeHead(400, {"Content-Type": "text/html"});
		 res.write("Error\n");
		 res.end();
      return;
   }
	 res.writeHead(200, {"Content-type":"text/html"});

    res.end(data);
});

}

var server = http.createServer(requestListener);
//event emiiter
server.listen(port,function(){
	console.log('Node app is running at port:',port);
});
