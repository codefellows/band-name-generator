var express = require("express") // "require" is node-specific
                                // "express" in quotes is the package name
var app = express();

app.use(express.static(__dirname + "/app/"));

var Adjective = (function() {
  this.Happy = true,
  this.Sad = true,
  this.Funny = true,
  this.Clever = true,
  this.Bright = true
});

var Noun = (function() {
  this.Dogs = true,
  this.Penguins = true,
  this.Cows = true,
  this.Goats = true,
  this.Lobsters = true
});

var Verb = (function() {
  this.hear = true,
  this.smell = true,
  this.experience = true,
  this.see = true
});

var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();

function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

function properName(x) {
  var word = getRandomWord(x)
  return word.charAt(0).toUpperCase() + word.slice(1, word.length);
};

var port = process.env.PORT || 3000;
//everying above creates the server

//now we're going to start a server on your local machine at port 3000 (talks to the server)
app.get("/", function (req, res) {
  res.sendFile('index.html');
});

app.get("/adjective", function (req, res) {
  res.json(getRandomWord(adjective));
});
app.get("/noun", function (req, res) {
  res.json(getRandomWord(noun));
});
app.get("/verb", function (req, res) {
  res.json(getRandomWord(verb));
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});



