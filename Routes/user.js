const userController = require("../Controller/Authentication/user");

const express = require("express");

const router = express.Router();

router.post("/login", userController.login);

module.exports = router;
