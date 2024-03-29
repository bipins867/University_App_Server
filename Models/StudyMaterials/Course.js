const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Course", {
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
  noOfYears: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
