const express = require("express");

const createGlobalUserController = require("../../Controller/GlobalUser/createGlobalUser");

const router = express.Router();

router.post("/globalUser", createGlobalUserController.createGlobalUser);

module.exports = router;
