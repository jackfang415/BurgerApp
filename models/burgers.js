var orm = require("../config/orm.js");

var burger = {
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

  update: function(objColVal, condition, cb) {
    orm.update("burgers_data", objColVal, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;