const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Notification", {
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
