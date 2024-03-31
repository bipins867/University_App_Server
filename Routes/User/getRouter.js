const express = require("express");

const getUserController = require("../../Controller/User/getUser");
const authMiddleware = require("../../Middleware/auth");

const router = express.Router();

router.get("/allStudents", getUserController.getAllStudents);
router.get("/allFaculties", getUserController.getAllFaculty);
router.get("/allAlumni", getUserController.getAllAlumni);

router.post("/courseStudents", getUserController.getCourseStudents);
router.post("/departmentFaculties", getUserController.getDepartmentFaculty);

router.post(
  "/userInfo",
  authMiddleware.userAuthentication,
  getUserController.getUserInfo
);

module.exports = router;
