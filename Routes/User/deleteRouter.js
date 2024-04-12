const express = require("express");

const deleteController = require("../../Controller/User/deleteUser");

const router = express.Router();

router.post("/student", deleteController.deleteStudent);
router.post("/alumni", deleteController.deleteAlumni);
router.post("/faculty", deleteController.deleteFaculty);

module.exports = router;
