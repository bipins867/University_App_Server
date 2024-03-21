const express = require("express");

const createUserController = require("../../Controller/User/createUser");

const router = express.Router();

router.post("/student", createUserController.addStudent);
router.post("/faculty", createUserController.addFaculty);
router.post("/alumni", createUserController.addAlumni);

module.exports = router;
