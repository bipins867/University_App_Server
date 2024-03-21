const express = require("express");

const createController = require("./createRouter");
const updateController = require("./updateRouter");
const getControler = require("./getRouter");

const router = express.Router();

router.use("/create", createController);
router.use("/update", updateController);
router.use("/get", getControler);

module.exports = router;
