var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

function Adjective(){
    this.happy = true;
    this.sad = true;
    this.sappy = true;
    this.blue = true;
};

var adjective = new Adjective();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
};

app.get("/adjective", function(req, res) {
    res.json(getRandomWord(adjective));
});

app.get("/", function (req, res) {
    res.send("hello universe!");
});

app.listen(port, function() {
    console.log('listeing')
    console.log('Server started on port ' + port);
});

app.use(express.static(__dirname + "/app/"));
