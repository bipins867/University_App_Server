const express = require("express");

const updateUserController = require("../../Controller/User/updateUser");

const router = express.Router();

router.post("/studentAdmin", updateUserController.updateStudentAdmin);
router.post("/studentInfo", updateUserController.updateStudentInfo);
router.post("/facultyInfo", updateUserController.updateFacultyInfo);
router.post("/alumniInfo", updateUserController.updateAlumniInfo);

module.exports = router;
