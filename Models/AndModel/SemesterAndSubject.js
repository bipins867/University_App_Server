const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("SemesterAndSubject", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
