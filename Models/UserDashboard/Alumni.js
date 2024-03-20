const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Alumni", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  course: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  profilePic: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  yearOfPassing: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  currentAffiliation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
