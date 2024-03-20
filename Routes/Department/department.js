const express = require("express");

const createController = require("./createRouter");
const getController = require("./getRouter");
const updateController = require("./updateRouter");

const router = express.Router();

router.use("/create", createController);
router.use("/get", getController);
router.use("/update", updateController);

module.exports = router;
