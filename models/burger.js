var orm = require('../config/orm.js');

var burger = {
    all: function(dragonball) {
        orm.all("burgers", function(res) {
            dragonball(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, dragonball) {
        orm.create("burgers", cols, vals, function(res) {
            dragonball(res);
        });
    },
    update: function(objColVals, condition, dragonball) {
        orm.update("burgers", objColVals, condition, function(res) {
            dragonball(res);
        });
    },
    delete: function(condition, dragonball) {
        orm.delete("burgers", condition, function(res) {
            dragonball(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;