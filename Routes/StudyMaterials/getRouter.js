const express = require("express");
const getStudyMaterialController = require("../../Controller/StudyMaterials/getStudyMaterial");

const router = express.Router();

router.post("/courses", getStudyMaterialController.getCourse);
router.post("/branches", getStudyMaterialController.getBranch);
router.post("/semesters", getStudyMaterialController.getSemester);
router.post("/subjects", getStudyMaterialController.getSubject);
router.post("/pdfs", getStudyMaterialController.getPdf);

module.exports = router;
