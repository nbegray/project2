// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes){

  var Farmersmarket = sequelize.define("farmersmarket", {
    // the routeName gets saved as a string
    info: DataTypes.STRING,
    // the name of the Farmersmarket (a string)
    marketName: DataTypes.STRING,
    // the Farmersmarket's role (a string)
    city: DataTypes.STRING,  
    // the Farmersmarket's age (a string)
    state: DataTypes.STRING,
    // and the Farmersmarket's force points (an int)
    website: DataTypes.STRING
  }, {
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true
  });
  return Farmersmarket;
};

// Creates a "Farmersmarket" model that matches up with DB
