const express = require("express");

const createDepartmentController = require("../../Controller/Department/createDepartment");

const router = express.Router();

router.post("/department", createDepartmentController.createDepartment);
router.post("/faculty", createDepartmentController.addFacultyToDepartment);

module.exports = router;
