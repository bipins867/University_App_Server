const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("SubjectAndPdf", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
