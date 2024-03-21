const GlobalUser = require("../../Models/GlobalUsers/GlobalUser");
const Course = require("../../Models/StudyMaterials/Course");
const Department = require("../../Models/Department/Department");
const ClubAndSociety = require("../../Models/ClubAndSociety/ClubAndSociety");

exports.getGlobalNotifications = async (req, res, next) => {
  const body = req.body;
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
exports.getFacultyNotifications = async (req, res, next) => {
  const body = req.body;
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
exports.getCourseNotifications = async (req, res, next) => {
  const body = req.body;
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
exports.getDepartmentNotifications = async (req, res, next) => {
  const body = req.body;
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
exports.getClubAndSocietyNotifications = async (req, res, next) => {
  const body = req.body;
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
