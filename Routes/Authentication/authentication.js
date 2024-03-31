const express = require("express");
const authController = require("../../Controller/Authentication/user");

const router = express.Router();

router.post("/login", authController.login);

module.exports = router;
