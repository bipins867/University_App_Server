const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  collegeId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
