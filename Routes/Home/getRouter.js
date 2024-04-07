const express = require("express");

const getHomeController = require("../../Controller/Home/getHome");

const router = express.Router();

router.get("/leaders", getHomeController.getAllLeaders);
router.get("/homeImages", getHomeController.getAllHomeImages);
module.exports = router;
