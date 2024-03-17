const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("EventAndNotice", {
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
  isEvent: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  forWhom: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createrName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createrDesignation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fileInfo: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});
