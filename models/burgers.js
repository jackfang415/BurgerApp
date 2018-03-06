var orm = require("../config/orm.js");

var menu = {
  all: function(cb) {
    orm.all("burgers_data", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("burgers_data", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(devour, condition, cb) {
    orm.update("burgers_data", devour, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = menu;