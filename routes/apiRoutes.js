var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/recommendations", function (req, res) {
    console.log("call received. Send back the recommended data from db!");
    db.Farmersmarket.findAll({}).then(function (dbFarmersmarket) {
      console.log(dbFarmersmarket);
      res.json(dbFarmersmarket);
    });
  });

  app.post("/api/recommendations", function (req, res) {
    console.log("we are in the post route");
    // console.log(req.body);
    db.Farmersmarket.create({
      info: req.body.info,
      marketName: req.body.marketName,
      city: req.body.city,
      state: req.body.state,
      website: req.body.website,
    }).then(function (dbFarmersmarket) {
      console.log(dbFarmersmarket);
      res.send(dbFarmersmarket);
    });
  });

  // // Create a new example
  // app.post("/api/farmersmarket", function (req, res) {
  //   db.Farmersmarket.create(req.body).then(function (dbFarmersmarket) {
  //     res.json(dbFarmersmarket);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/farmersmarket/:id", function(req, res) {
  //   db.farmersmarket.destroy({ where: { id: req.params.id } }).then(function(dbFarmersmarket) {
  //     res.json(dbFarmersmarket);
  //   });
  // });
};
