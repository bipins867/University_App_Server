const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Clubandsociety", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  yearNo: Sequelize.INTEGER,
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});
