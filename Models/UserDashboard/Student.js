const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Student", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  fathersName: { type: Sequelize.STRING, allowNull: false },
  department: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  profilePic: { type: Sequelize.STRING, defaultValue: "" },
});
