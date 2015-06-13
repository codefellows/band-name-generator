'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

var Adjective = function() {
  this.sleepy = true;
  this.soporific = true;
  this.tasty = true;
  this.awesome = true;
  this.penultimate = true;
}
var adjective = new Adjective();

var Verb = function() {
  this.fast = true;
  this.jump = true;
  this.crawl = true;
  this.wave = true;
  this.fall = true;
}
var verb = new Verb();

var Noun = function() {
  this.tree = true;
  this.potato = true;
  this.car = true;
  this.park = true;
  this.guitar = true;
}
var noun = new Noun();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() *
    (propArray.length - 0) + 0)];
  return {word: randomProp};
}

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.listen(port, function() {
  console.log('server available at localhost: ' + port);
});

