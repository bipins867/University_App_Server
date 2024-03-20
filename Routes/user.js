const userController = require("../Controller/Authentication/user");

const express = require("express");
const facultyController = require("../Controller/Faculty/faculty_utils");

const router = express.Router();

router.post("/login", userController.login);

router.get("/getFacultyList", facultyController.getAllFacultyList);

module.exports = router;
