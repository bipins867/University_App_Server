const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("ClubAndSocietyMember", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  designation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});
