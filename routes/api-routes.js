var express = require("express");

// var router = express.Router();
var db = require("../models")

module.exports = function (app) {
  // post route -> back to index
  app.post("/burgers/create", function (req, res) {
    // takes the request object using it as input for burger.addBurger
    db.burger.create({ burger_name: req.body.burger_name }).then(function (result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      // console.log(result);
      res.redirect("/");
    });
  });

  app.post("/burgers/eaten", function (req, res) {

    db.user.create({ user_name: req.body.user_name, burgerId: req.body.burgerId }).then(function (result) {
      res.send(result)
    })

  });
  // put route -> back to index 
app.put("/burgers/update/:id", function (req, res) {
    db.burger.update ({  
      devoured: true
    },
      {
        where:
        {
          id: parseInt(req.params.id)
        }
      }).then(function (result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        // Send back response and let page reload from .then in Ajax
        res.send(result)

        // res.redirect()
      });
  });
}