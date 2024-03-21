const express = require("express");

const createClubAndSocietyController = require("../../Controller/ClubAndSociety/createClubAndSociety");

const router = express.Router();

router.post(
  "/clubAndSociety",
  createClubAndSocietyController.createClubAndSociety
);
router.post("/addMember", createClubAndSocietyController.addMember);

module.exports = router;
