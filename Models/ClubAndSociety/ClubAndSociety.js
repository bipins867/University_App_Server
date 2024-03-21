const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Clubandsociety", {
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
  profilePic: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  about: {
    type: Sequelize.TEXT,
  },
  noOfYears: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
