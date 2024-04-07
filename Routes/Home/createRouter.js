const express = require("express");

const createHomeController = require("../../Controller/Home/createHome");
const { fileDataMiddleware } = require("../../Utils/utils");

const router = express.Router();

router.post(
  "/addLeader",
  fileDataMiddleware("profilePic"),
  createHomeController.addLeader
);
router.post(
  "/addHomeImage",
  fileDataMiddleware("imageUrl"),
  createHomeController.addImageSlide
);
module.exports = router;
