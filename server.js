var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('lodash');
var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');
var rand = require('./randomWord');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/'));

var port = process.env.PORT || 3000;

var nounData = new Noun();
var verbData = new Verb();
var adjectiveData = new Adjective();

function postWord (word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have your awesome word, ' + word + ', in our list.'};
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for submitting ' + word + '!'};
};


app.listen(port, function () {
  console.log('server started on port 3000');
});

app.get("/", function (request, response) {
  response.sendFile('index.html');
});

app.get("/adjective", function (request, response) {
  response.json(rand.gRWord(adjectiveData));
});

app.get('/adjectives', function(request, response) {
  //get adj
  response.json(adjectiveData);
});

app.post('/adjectives', function(request, response) {
  var word = postWord(request.body.word, adjectiveData);
  response.json(word);
});

app.get("/verb", function (request, response) {
  response.json(rand.gRWord(verbData));
});

app.get("/noun", function (request, response) {
  response.json(rand.gRWord(nounData));
});
















