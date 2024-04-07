const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Leader", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  subTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  profilePic: {
    type: Sequelize.STRING,
  },
});
