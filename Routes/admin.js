const adminController = require("../Controller/Admin/admin");
const adminStudentController = require("../Controller/Admin/student");
const adminFacultyController = require("../Controller/Admin/faculty");
const adminAlumniController = require("../Controller/Admin/alumni");

const express = require("express");

const router = express.Router();

router.post(
  "/events/sendGlobalNotification",
  adminController.sendGlobalNotification
);
router.post(
  "/events/sendFacultyNotification",
  adminController.sendFacultyNotification
);
router.post(
  "/events/sendStudentNotification",
  adminController.sendStudentNotification
);
router.post(
  "/events/sendAlumniNotification",
  adminController.sendAlumniNotification
);
router.post(
  "/events/sendDepartmentNotification",
  adminController.sendDepartmentNotification
);

router.post("/users/addStudent", adminStudentController.addStudents);
router.post("/users/addFaculty", adminFacultyController.addFaculty);
router.post("/users/addAlumni", adminAlumniController.addAlumni);

module.exports = router;
