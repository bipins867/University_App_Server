const express = require("express");

const createController = require("./createRouter");
const getController = require("./getRouter");

const router = express.Router();

router.use("/create", createController);
router.use("/get", getController);

module.exports = router;
