const express = require("express");

const createController = require("./createRouter");
const getController = require("./getRouter");
const updateControlelr = require("./updateRouter");
const deleteController = require("./deleteRouter");

const { fileDataMiddleware } = require("../../Utils/utils");

const router = express.Router();

router.use("/create", fileDataMiddleware("profilePic"), createController);
router.use("/get", getController);
router.use("/update", updateControlelr);
router.use("/delete", deleteController);

module.exports = router;
