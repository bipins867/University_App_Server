const express = require("express");

const createController = require("./createRouter");
const getController = require("./getRouter");
const updateController = require("./updateRouter");
const deleteController = require("./deleteRouter");

const { fileDataMiddleware } = require("../../Utils/utils");

const router = express.Router();

router.use("/create", fileDataMiddleware("imageUrl"), createController);
router.use("/get", getController);
router.use("/update", updateController);
router.use("/delete", deleteController);

module.exports = router;
