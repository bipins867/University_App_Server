const express = require("express");
const eventAndNoticeController = require("../Controller/EventAndNotice/eventAndNotice");

const router = express.Router();

router.post(
  "/getEventAndNotice",
  eventAndNoticeController.getEventAndNotifications
);

module.exports = router;
