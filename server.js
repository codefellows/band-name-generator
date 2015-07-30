'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js');
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postRandomWord = require('./lib/postRandomWord.js');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/app/')); 

// var Adjective = function() {
// 	this.sleepy = true;
// 	this.crazy = true;
// 	this.penultimate = true;
// 	this.superb = true;
// 	this.zingy = true;
// };

var adjective = new Adjective();


// var Verb = function() {
// 	this.concentrate = true;
// 	this.extend = true;
// 	this.imagine = true;
// 	this. arrange = true;
// 	this.shoot = true;
// };

var verb = new Verb();


// var Noun = function() {
// 	this.money = true;
// 	this.flag = true;
// 	this.swim = true;
// 	this.work = true;
// 	this.jump = true;
// };

var noun = new Noun();


// function getRandomWord(object) {

// 	var propArray = Object.keys(object);

// 	var randomProp = propArray[Math.floor(Math.random() * 
// 		propArray.length)];

// 	return{word: randomProp};
// }


// function postRandomWord(word, wordObject) {
// 	if (!wordObject.hasOwnProperty(word)) {
// 		wordObject[word] = true;
// 		return {message: 'Thanks! We added your fabulous word, ' 
// 		+ word + 'to our list.'};
// 	}

// 	return {message: 'We already have your word, ' + word + 'in our list.'};

// }

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.post('/adjective', function(req, res) {
	console.log(req.body);
	res.json(postRandomWord(req.body.word, adjective));
});

app.get('/adjective', function(req, res){
	res.json(getRandomWord(adjective));
});

app.post('/verb', function(req, res) {
	console.log(req.body);
	res.json(postRandomWord(req.body.word, verb));
});

app.get('/verb', function(req, res) {
	res.json(getRandomWord(verb));

});

app.post('/noun', function(req, res) {
	console.log(req.body);
	res.json(postRandomWord(req.body.word, noun));
});

app.get('/noun', function(req, res) {
	res.json(getRandomWord(noun));

});

app.listen(port, function() {
	console.log('server started on port ' + port);
});