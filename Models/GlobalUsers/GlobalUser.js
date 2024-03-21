const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("GlobalUser", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  subTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
