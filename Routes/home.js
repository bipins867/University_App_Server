const homeController = require("../Controller/home");

const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/info", homeController.getHomePageInfo);

module.exports = homeRouter;
