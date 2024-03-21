const express = require("express");

const updateClubAndSocietyController = require("../../Controller/ClubAndSociety/updateClubAndSociety");

const router = express.Router();

router.post("/updateAdmin", updateClubAndSocietyController.updateAdmin);

module.exports = router;
