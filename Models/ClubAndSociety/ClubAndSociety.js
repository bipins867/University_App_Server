const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Clubandsociety", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  subTitle: Sequelize.STRING,
  membersCount: Sequelize.INTEGER,
  profilePic: Sequelize.STRING,
  numOfYears: {
    type: Sequelize.INTEGER,
    defaultValue: 4,
  },
});
