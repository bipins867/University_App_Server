const express = require("express");
const deleteController = require("../../Controller/StudyMaterials/deleteStudyMaterial");

const router = express.Router();

router.post("/course", deleteController.deleteCourse);
router.post("/branch", deleteController.deleteBranch);
router.post("/semester", deleteController.deleteSemester);
router.post("/subject", deleteController.deleteSubject);
router.post("/pdf", deleteController.deletePdf);

module.exports = router;
