const express = require("express");

const createController = require("./createRouter");
const getController = require("./getRouter");
const deleteController = require("./deleteRouter");

const router = express.Router();

router.use("/create", createController);
router.use("/get", getController);
router.use("/delete", deleteController);

module.exports = router;
