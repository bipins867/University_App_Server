const express = require("express");

const updateClubAndSocietyController = require("../../Controller/ClubAndSociety/updateClubAndSociety");

const router = express.Router();

router.post("/updateAdmin", updateClubAndSocietyController.updateAdmin);
router.post("/clubAndSocietyInfo", updateClubAndSocietyController.updateInfo);

module.exports = router;
