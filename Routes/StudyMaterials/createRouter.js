const express = require("express");
const createStudyMaterialController = require("../../Controller/StudyMaterials/createStudyMaterial");

const router = express.Router();

router.post("/course", createStudyMaterialController.createCourse);
router.post("/branch", createStudyMaterialController.createBranch);
router.post("/semester", createStudyMaterialController.createSemester);
router.post("/subject", createStudyMaterialController.createSubject);
router.post("/pdf", createStudyMaterialController.createPdf);

module.exports = router;
