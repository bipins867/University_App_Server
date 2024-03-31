const express = require("express");

const deleteNotificationController = require("../../Controller/Notifications/deleteNotification");

const router = express.Router();

router.post("/notification", deleteNotificationController.deleteNotification);

module.exports = router;
