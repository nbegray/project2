var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Farmersmarket.findAll({}).then(function(dbFarmersmarket) {
      res.render("index", {
        msg: "Welcome!",
        Farmersmarket: dbFarmersmarket
      });
    });
  });

  // Load Farmersmarket page and pass in an Farmersmarket by id
  app.get("/Farmersmarket/:id", function(req, res) {
    db.Farmersmarket.findOne({ where: { id: req.params.id } }).then(function(dbFarmersmarket) {
      res.render("Farmersmarket", {
        Farmersmarket: dbFarmersmarket
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
