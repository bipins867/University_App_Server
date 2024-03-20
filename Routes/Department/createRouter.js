const express = require("express");

const createDepartmentController = require("../../Controller/Department/createDepartment");

const router = express.Router();

router.post("/Department", createDepartmentController.createDepartment);

module.exports = router;
