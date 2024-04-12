const express = require("express");
const deleteController = require("../../Controller/Department/deleteDepartment");

const router = express.Router();

router.post("/department", deleteController.deleteDepartment);
router.post("/faculty", deleteController.deleteFaculty);

module.exports = router;
