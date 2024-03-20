const express = require("express");
const getStudyMaterialController = require("../../Controller/StudyMaterials/getStudyMaterial");

const router = express.Router();

router.post("/Course", getStudyMaterialController.getCourse);
router.post("/Branch", getStudyMaterialController.getBranch);
router.post("/Semester", getStudyMaterialController.getSemester);
router.post("/Subject", getStudyMaterialController.getSubject);
router.post("/Pdf", getStudyMaterialController.getPdf);

module.exports = router;
