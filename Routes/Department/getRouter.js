const express = require("express");

const getDepartmentController = require("../../Controller/Department/getDepartment");

const router = express.Router();

router.get("/departments", getDepartmentController.getDepartments);
router.post("/faculties", getDepartmentController.getFacultyList);

module.exports = router;
