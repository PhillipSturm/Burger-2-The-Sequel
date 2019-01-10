var express = require("express");

var db = require("../models")

module.exports = function (app) {
  app.post("/burgers/create", function (req, res) {
    // takes the request object using it as input for burger.addBurger
    db.burger.create({ burger_name: req.body.burger_name }).then(function (result) {
      res.redirect("/");
    });
  });

  app.post("/burgers/eaten", function (req, res) {

    db.user.create({ user_name: req.body.user_name, burgerId: req.body.burgerId }).then(function (result) {
      res.send(result)
    })

  });
  
  // app.put("/burgers/update/:id", function (req, res) {
  //     db.burger.update ({  
  //       devoured: true
  //     },
  //       {
  //         where:
  //         {
  //           id: parseInt(req.params.id)
  //         }
  //       }).then(function (result) {
  //         res.send(result)
  //       });
  //   });
}