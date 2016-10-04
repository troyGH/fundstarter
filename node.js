#!/usr/bin/env node

var express = require("express");
var app = express();

/* serves static pages */ 
//app.use(express.static(__dirname+ '/public') {

	app.get("/", function(req, res) { 
	res.sendfile('public/index.html') /*servesmainpage*/
	});
	
	app.post("/user/add", function(req, res) { 
	/* some server side logic */
	res.send("OK"); });

	port = process.env.PORT || 8080;
	app.listen(port, function() { 
		console.log("Listeningon" + port);
	});
