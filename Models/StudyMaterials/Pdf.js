const Sequelize = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define("Pdf", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  subTitle: Sequelize.STRING,

  isQuestionPaper: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  pdfUrl: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});
