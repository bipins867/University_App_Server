const express = require("express");

const createNotificationsController = require("../../Controller/Notifications/createNotifications");

const router = express.Router();

router.post("/global", createNotificationsController.createGlobalNotifications);
router.post(
  "/faculty",
  createNotificationsController.createFacultyNotifications
);
router.post("/course", createNotificationsController.createCourseNotifications);
router.post(
  "/clubAndSociety",
  createNotificationsController.createClubAndSocietyNotifications
);
router.post(
  "/department",
  createNotificationsController.createDepartmentNotifications
);

module.exports = router;
