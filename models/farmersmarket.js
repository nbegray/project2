// Dependencies
// =============================================================
module.exports = function (sequelize, DataTypes) {

  var Farmersmarket = sequelize.define("Farmersmarket", {
    // the routeName gets saved as a string
    info: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // the name of the Farmersmarket (a string)
    marketName: DataTypes.STRING,
 
  }, {
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
    });
  return Farmersmarket;
};

// Creates a "Farmersmarket" model that matches up with DB
