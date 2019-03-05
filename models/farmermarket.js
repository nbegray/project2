// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Farmersmarket" model that matches up with DB
var Farmersmarket = sequelize.define("farmersmarket", {
  // the routeName gets saved as a string
  info: Sequelize.STRING,
  // the name of the Farmersmarket (a string)
  marketName: Sequelize.STRING,
  // the Farmersmarket's role (a string)
  city: Sequelize.STRING,  
  // the Farmersmarket's age (a string)
  state: Sequelize.STRING,
  // and the Farmersmarket's force points (an int)
  website: Sequelize.STRING
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});
// Syncs with DB
Farmersmarket.sync();
// Makes the Farmersmarket Model available for other files (will also create a table)
module.exports = Farmersmarket;
