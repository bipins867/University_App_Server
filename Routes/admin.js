const adminController = require("../Controller/Admin/admin");
const adminStudentController = require("../Controller/Admin/student");

const express = require("express");

const router = express.Router();

router.post(
  "/events/sendGlobalNotification",
  adminController.sendGlobalNotification
);

router.post("/users/addStudent", adminStudentController.addStudents);

module.exports = router;
