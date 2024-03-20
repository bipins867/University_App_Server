const express = require("express");

const updateDepartmentController = require("../../Controller/Department/updateDepartment");

const router = express.Router();

router.post("/departmentHod", updateDepartmentController.updateDepartmentHod);
router.post("/addFaculty", updateDepartmentController.addFaculty);

module.exports = router;
