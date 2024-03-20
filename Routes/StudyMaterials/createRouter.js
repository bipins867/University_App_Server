const express = require("express");
const createStudyMaterialController = require("../../Controller/StudyMaterials/createStudyMaterial");

const router = express.Router();

router.post("/Course", createStudyMaterialController.createCourse);
router.post("/Branch", createStudyMaterialController.createBranch);
router.post("/Semester", createStudyMaterialController.createSemester);
router.post("/Subject", createStudyMaterialController.createSubject);
router.post("/Pdf", createStudyMaterialController.createPdf);

module.exports = router;
