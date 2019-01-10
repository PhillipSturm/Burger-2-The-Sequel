var express = require("express");
var sequelize = require("sequelize")

var db = require("../models")
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.redirect("/burgers");
  });

  app.get("/burgers", function (req, res) {
    db.burger.findAll({include: [db.user]}, {order: [["burger_name"]]}).then(function (data) {
      var hbsObject = { burgers: data };
      res.render("index", hbsObject);
    });
  });

}

