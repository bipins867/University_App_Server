const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Branch", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  subTitle: Sequelize.STRING,
  semester: Sequelize.INTEGER,
});
