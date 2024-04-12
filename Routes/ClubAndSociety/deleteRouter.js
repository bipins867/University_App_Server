const express = require("express");
const deleteController = require("../../Controller/ClubAndSociety/deleteClubAndSociety");

const router = express.Router();

router.post("/clubAndSociety", deleteController.deleteClubAndSociety);
router.post("/student", deleteController.deleteStudent);

module.exports = router;
