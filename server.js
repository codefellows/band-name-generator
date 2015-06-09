var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('server started at port' + port);
})

app.get("/", function(req, res){
  res.send("Hello Universe!");
});
var randomArray = ["dog", "cat", "pig", "hamster", "human"];

var adjectives = ["beautiful", "ugly", "hot", "green", "gold", "tall", "insane"]


  var randomStringSelector = function (stringArray) {
    return stringArray[Math.floor(Math.random() * stringArray.length)];
  }
app.get("/randomString", function(req, res){
  res.send(randomStringSelector(randomArray));
})


app.get("/adjective", function(req,res){
  res.json( { word: randomStringSelector(adjectives)})
})
