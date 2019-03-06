var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("index.html", function (req, res) {
    db.Farmersmarket.findAll({}).then(function (dbFarmersmarket) {
      res.render("index", {
        msg: "Welcome!",
        Farmersmarket: dbFarmersmarket
      });
    });
  });
  app.get("/reccomendations", function (req, res) {
    db.Farmersmarket.findOne({ where: { id: req.params.id } }).then(function (dbFarmersmarket) {
      res.render("Farmersmarket", {
        Farmersmarket: dbFarmersmarket
      });
    });
  });

  app.get("/search", function (req, res) {
    db.Farmersmarket.findOne({ where: { id: req.params.name } }).then(function (dbFarmersmarket) {
      res.render("Farmersmarket", {
        Farmersmarket: dbFarmersmarket
      });
    });
  });


  app.get("/farmersmarket/:city", function (req, res) {
    db.Farmersmarket.findOne({ where: { id: req.params.city } }).then(function (dbFarmersmarket) {
      res.render("Farmersmarket", {
        Farmersmarket: dbFarmersmarket
      });
    });
  });
  // Load Farmersmarket page and pass in an Farmersmarket by id
  app.get("/farmersmarket/:zip", function (req, res) {
    db.Farmersmarket.findOne({ where: { id: req.params.zip } }).then(function (dbFarmersmarket) {
      res.render("Farmersmarket", {
        Farmersmarket: dbFarmersmarket
      });
    });
  });
  app.get("/farmersmarket/:rating", function (req, res) {
    db.Farmersmarket.findOne({ where: { id: req.params.rating } }).then(function (dbFarmersmarket) {
      res.render("Farmersmarket", {
        Farmersmarket: dbFarmersmarket
      });
    });
  });

  app.get("/add", function (req, res) {
    console.log("hi");
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
