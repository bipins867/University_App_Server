const express = require("express");
const getClubAndSocietesController = require("../../Controller/ClubAndSociety/getClubAndSociety");

const router = express.Router();

router.get(
  "/clubAndSocieties",
  getClubAndSocietesController.getClubAndSocietes
);
router.post("/members", getClubAndSocietesController.getMembers);

module.exports = router;
