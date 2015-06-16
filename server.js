var express = require("express");
var bodyParser = require("body-parser");
var getRandomWord = require(__dirname + "/lib/" + "getRandomWord.js");
var adjective = require(__dirname + "/lib" + "/adjective.js");
var verb = require(__dirname + "/lib" + "/verb.js");
var noun = require(__dirname + "/lib" + "/noun.js");

var app = express();
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + "/app"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




//var quotes =[
//"I have not failed",
//"I have a dream",
//"I have a life"
//];


/*var noun = [
  "houses",
  "cars",
  "bikes",
  "trees",
  ]

 var verb = [
  "running",
  "jumping",
  "playing",
  "tumbling",
  ]
*/

app.post('/adjective', function(req, res) {
  adjective.push(req.body.word);
  console.log(req.body.word);
  //May need to use = true; and turn the array into a constructor
  res.json({message: "Ya did it", confirm:req.body.word })
});

app.post('/verb', function(req, res) {
  verb.push(req.body.word);
  console.log(req.body.word);
  //May need to use = true; and turn the array into a constructor
  res.json({message: "You did it", confirm:req.body.word })
});

app.post('/noun', function(req, res) {
  noun.push(req.body.word);
  console.log(req.body.word);
  //May need to use = true; and turn the array into a constructor
  res.json({message: "Ya did it", confirm:req.body.word })
});

app.get('/', function(req, res) {
  res.sendFile (__dirname +'/app/index.html');
});

//app.get('/', function(req, res) {
 // var randomIndex = Math.floor(Math.random()*quotes.length);
 // res.json(quotes[randomIndex] );
//});


//app.get("/", function (req, res) {
//  res.send("hello, universe");
//})


app.get('/adjective', function(req, res) {
  var w = getRandomWord (adjective)
  res.json( {"word": w} );
  console.log(w);
});

app.get('/verb', function(req, res) {
  var v = getRandomWord (verb)
  res.json( {"word": v} );
  console.log(v);
});

app.get('/noun', function(req, res) {
  var n = getRandomWord (noun)
  res.json( {"word": n} );
  console.log(n);
});

/*
app.get('/noun', function(req, res) {
  var randomIndex = Math.floor(Math.random()*noun.length);
  res.json( {"word": noun[randomIndex]} );
});

app.get('/verb', function(req, res) {
  var randomIndex = Math.floor(Math.random()*verb.length);
  res.json( {"word": verb[randomIndex]} );
});
*/

app.listen(port, function () {
  console.log("The Port is active");
})
