const express = require("express");

const createController = require("./createRouter");
const getController = require("./getRouter");
const updateControlelr = require("./updateRouter");

const router = express.Router();

router.use("/create", createController);
router.use("/get", getController);
router.use("/update", updateControlelr);

module.exports = router;
