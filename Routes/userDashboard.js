const userDashboard = require("../Controller/UserDashboard/userDashboard");
const userAuthentication = require("../Middleware/auth");

const express = require("express");

const router = express.Router();

router.get(
  "/getUserInfo",
  userAuthentication.userAuthentication,
  userDashboard.getUserInfo
);

module.exports = router;
