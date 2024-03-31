const express = require("express");

const getNotificationController = require("../../Controller/Notifications/getNotifications");

const router = express.Router();

router.get("/notifications", getNotificationController.getAllNotifications);

router.post("/global", getNotificationController.getGlobalNotifications);
router.post("/faculty", getNotificationController.getFacultyNotifications);

router.post("/course", getNotificationController.getCourseNotifications);
router.post(
  "/clubAndSociety",
  getNotificationController.getClubAndSocietyNotifications
);
router.post(
  "/department",
  getNotificationController.getDepartmentNotifications
);

module.exports = router;
