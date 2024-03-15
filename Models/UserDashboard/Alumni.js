const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Alumni", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,

  collegeId: Sequelize.INTEGER,
  course: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  phone: Sequelize.STRING,
  profilePic: Sequelize.STRING,
  yearOfPassing: Sequelize.INTEGER,
  currentAffiliation: Sequelize.STRING,
});
