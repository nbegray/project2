var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/farmersmarkets", function(req, res) {
    db.Farmersmarket.findAll({}).then(function(dbMarket) {
      res.json(dbMarket);
    });
  });

  app.get("/api/farmersmarkets/:id", function(req, res) {
    
    db.Farmersmarket.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMarket) {
      res.json(dbMarket);
    });
  });

  // Create a new example
  app.post("/api/farmersmarkets", function(req, res) {
    db.Farmersmarket.create(req.body).then(function(dbMarket) {
      res.json(dbMarket);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbMarket) {
  //     res.json(dbMarket);
  //   });
  // });
};
