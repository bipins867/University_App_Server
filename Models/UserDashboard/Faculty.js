const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Faculty", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,

  collegeId: Sequelize.INTEGER,

  email: {
    type: Sequelize.STRING,
    unique: true,
  },

  profilePic: Sequelize.STRING,

  qualification: Sequelize.STRING,
  areaOfSpecialization: Sequelize.STRING,
  designation: Sequelize.STRING,
  dateOfJoining: Sequelize.DATE,
  phone: Sequelize.STRING,
});
