var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


module.exports.burgerController = function(app) {
    app.get('/', function(req, res) {
        burger.findAllBurgers(function(burger_data) {
            res.render('index', { burger_data });
        });
    });

    app.post('/create', function(req, res) {
        burger.addBurger(req.body.burger_name, function(result) {
            console.log(result);
            res.redirect('/');
        });
    });

    app.post('/update', function(req, res) {
        console.log(req.body.id);
        burger.devourBurger(req.body.id, function(result) {
            console.log(result);
            res.redirect('/');
        });
    });
}