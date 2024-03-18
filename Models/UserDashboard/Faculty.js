const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Faculty", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },

  profilePic: {
    type: Sequelize.STRING,
    defaultValue: "",
  },

  qualification: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  areaOfSpecialization: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  designation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateOfJoining: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
