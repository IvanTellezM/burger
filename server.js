// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 7070;


// Sets up the Express App
// =============================================================


// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/public"));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Set Handlebars as the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
// app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});