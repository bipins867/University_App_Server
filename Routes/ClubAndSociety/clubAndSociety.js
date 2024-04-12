const express = require("express");

const createController = require("./createRouter");
const updateController = require("./updateRouter");
const getControler = require("./getRouter");
const deleteController = require("./deleteRouter");
const { fileDataMiddleware } = require("../../Utils/utils");

const router = express.Router();

router.use("/create", fileDataMiddleware("profilePic"), createController);
router.use("/update", updateController);
router.use("/get", getControler);
router.use("/delete", deleteController);

module.exports = router;
