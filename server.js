var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var strings = ["amber", "apple", "paint", "ChimpanzeeCat"];
var adjectives = ["purple", "bumpy", "savory"];
app.use(express.static(__dirname + "/app/"));
app.get("/", function(req, res) {
	var string = strings[Math.floor(Math.random()*strings.length)];
	res.send(string);
});

app.get("/adjectives", function(req, res){
	var randomIndex = Math.floor(Math.random() * adjectives.length);
	res.json({"word": adjectives[randomIndex]});	
});

app.listen(port, function(){
	console.log('server started on port ' + port);
});