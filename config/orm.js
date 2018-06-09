// Import MySQL connection.
var connection = require("../config/connection.js");


// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}




//cretate the code that will execute MySql commands
var orm = {
    //this function will select all burgers from the table which is a user input
    selectAllBurgers: function(tableInput, cb) {
        var s = "SELECT * FROM " + tableInput + ";";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },


    addBurger: function(tableInput, burgerInput, cb) {
        var a = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
        connection.query(a, [burgerInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    devourBurger: function(tableInput, idInput, cb) {
        var d = "UPDATE" + tableInput + " SET devoured = 1 WHERE id = ?";
        connection.query(d, [idInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;