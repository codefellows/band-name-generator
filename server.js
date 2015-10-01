var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));

function Adjective(){
  this.happy = true;
  this.evil = true;
  this.good = true;
  this.sad = true;
  this.mad = true;
  this.explosive = true;
  this.fuzzy = true;
  this.pokemon = true;
}

var adjective = new Adjective();

function getRandomWord (object){
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random()*propArray.length)];
  return {word: randomProp};
}

getRandomWord(adjective);

app.get('/adjective', function(req, res){
  res.json(getRandomWord(adjective));
});

app.get("/", function(req, res){
  res.sendFile('index.html');
});

app.listen(port, function(){
  console.log('server started on port, access at localhost:' + port);
  console.log(getRandomWord(adjective));
});

