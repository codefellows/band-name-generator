var express = require("express") // "require" is node-specific
                                // "express" in quotes is the package name
var app = express();

var Adjective = (function() {
  this.happy = true,
  this.sad = true,
  this.funny = true,
  this.clever = true,
  this.bright = true
});

var adjective = new Adjective();


function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

var port = process.env.PORT || 3000;
//everying above creates the server

//now we're going to start a server on your local machine at port 3000 (talks to the server)
app.get("/", function (req, res) {
  res.send("hello universe!");
});

app.get("/adjective", function (req, res) {
  res.json(getRandomWord(adjective));
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});


