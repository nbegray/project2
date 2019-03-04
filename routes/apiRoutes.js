var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/farmersmarkets", function (req, res) {
    db.Farmersmarket.findAll({}).then(function (dbFarmersmarkets) {
      res.json(dbFarmersmarkets);
    });
  });

  app.get("/api/farmersmarkets/:id", function (req, res) {

    db.Farmersmarket.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbFarmersmarkets) {
      res.json(dbFarmersmarkets);
    });
  });

  // Create a new example
  app.post("/api/farmersmarkets", function (req, res) {
    db.Farmersmarket.create(req.body).then(function (dbFarmersmarkets) {
      res.json(dbFarmersmarkets);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbFarmersmarkets) {
  //     res.json(dbFarmersmarkets);
  //   });
  // });
};
