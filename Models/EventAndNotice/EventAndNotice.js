const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("EventAndNotice", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  subTitle: Sequelize.STRING,
  isEvent: Sequelize.BOOLEAN,
  forWhom: Sequelize.INTEGER,
  createrId: Sequelize.INTEGER,
  createrDesignation: Sequelize.STRING,
  fileInfo: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});
