// Dependencies
// =============================================================
var express = require("express");
var app = express();
var path = require("path");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('hello world')
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
