const express = require("express");

const createController = require("./createRouter");
const getController = require("./getRouter");
const updateController = require("./updateRouter");
const { fileDataMiddleware } = require("../../Utils/utils");

const router = express.Router();

router.use("/create", fileDataMiddleware("imageUrl"), createController);
router.use("/get", getController);
router.use("/update", updateController);

module.exports = router;
