const express = require("express");
const deleteController = require("../../Controller/Home/deleteHome");

const router = express.Router();

router.post("/leader", deleteController.deleteLeader);
router.post("/imageSlide", deleteController.deleteImageSlide);

module.exports = router;
