var express = require("express");
var app = express();
var port = process.env.PORT || 3000;


var quotes =[
"I have not failed",
"I have a dream",
"I have a life"
];

var adjectives = [
  "Delghtful",
  "robust",
  "bumpy",
  "tall",
  ]

app.get('/', function(req, res) {
  var randomIndex = Math.floor(Math.random()*quotes.length);
  res.json(quotes[randomIndex] );
});

//app.get("/", function (req, res) {
//  res.send("hello, universe");
//})

app.get('/adjective', function(req, res) {
  var randomIndex = Math.floor(Math.random()*adjectives.length);
  res.json( {"word": adjectives[randomIndex]} );
});

app.listen(port, function () {
  console.log("The Port is active");
})
