var express = require("express");
var sequelize = require("sequelize")

// var router = express.Router();
var db = require("../models")
module.exports = function (app) {
  // get route -> index
  app.get("/", function (req, res) {
    res.redirect("/burgers");
  });

  app.get("/burgers", function (req, res) {
    // express callback response by calling burger.selectAllBurger
    db.burger.findAll({include: [db.user]}, {order: [["burger_name"]]}).then(function (data) {
      // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
      var hbsObject = { burgers: data };
      res.render("index", hbsObject);
    });
  });

}

