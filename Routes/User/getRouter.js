const express = require("express");

const getUserController = require("../../Controller/User/getUser");

const router = express.Router();

router.get("/allStudents", getUserController.getAllStudents);
router.get("/allFaculty", getUserController.getAllFaculty);
router.get("/allAlumni", getUserController.getAllAlumni);

router.post("/courseStudents", getUserController.getCourseStudents);
router.post("/departmentFaculty", getUserController.getDepartmentFaculty);

router.post("/userInfo", getUserController.getUserInfo);

module.exports = router;
