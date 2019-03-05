var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/farmersmarket", function (req, res) {
    db.Farmersmarket.findAll({}).then(function (dbFarmersmarket) {
      res.json(dbFarmersmarket);
    });
  });

  app.get("/api/farmersmarket/:id", function (req, res) {

    db.Farmersmarket.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbFarmersmarket) {
      res.json(dbFarmersmarket);
    });
  });

  // Create a new example
  app.post("/api/farmersmarket", function (req, res) {
    db.Farmersmarket.create(req.body).then(function (dbFarmersmarket) {
      res.json(dbFarmersmarket);
    });
  });

  // Delete an example by id
  app.delete("/api/farmersmarket/:id", function(req, res) {
    db.farmersmarket.destroy({ where: { id: req.params.id } }).then(function(dbFarmersmarket) {
      res.json(dbFarmersmarket);
    });
  });
};
