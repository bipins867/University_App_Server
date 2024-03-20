const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Department", {
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
  about: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  hodId: {
    type: Sequelize.INTEGER,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});
