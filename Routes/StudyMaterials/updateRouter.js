const express = require("express");
const updateStudyMaterialController = require("../../Controller/StudyMaterials/updateStudyMaterial");

const router = express.Router();

router.post("/course", updateStudyMaterialController.updateCourse);
router.post("/branch", updateStudyMaterialController.updateBranch);
router.post("/semester", updateStudyMaterialController.updateSemester);
router.post("/subject", updateStudyMaterialController.updateSubject);
router.post("/pdf", updateStudyMaterialController.updatePdf);

module.exports = router;
