const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Student", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  fathersName: Sequelize.STRING,
  collegeId: Sequelize.INTEGER,
  department: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  phone: Sequelize.STRING,
  address: Sequelize.STRING,
  profilePic: Sequelize.STRING,
});
