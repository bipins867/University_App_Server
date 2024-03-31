const Course = require("../../Models/StudyMaterials/Course");
const Semester = require("../../Models/StudyMaterials/Semester");
const Branch = require("../../Models/StudyMaterials/Branch");
const Subject = require("../../Models/StudyMaterials/Subject");
const Pdf = require("../../Models/StudyMaterials/Pdf");

exports.updateCourse = async (req, res, next) => {
  const body = req.body;
  try {
    const courseData = body.courseData;
    console.log(courseData);
    const course = await Course.findOne({ where: { id: courseData.id } });
    await course.update(courseData);
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.updateBranch = async (req, res, next) => {
  const body = req.body;
  try {
    const branchData = body.branchData;
    const branch = await Branch.findOne({ where: { id: branchData.id } });
    await branch.update(branchData);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.updateSemester = async (req, res, next) => {
  const body = req.body;
  try {
    const semesterData = body.semesterData;
    const semester = await Semester.findOne({ where: { id: semesterData.id } });
    await semester.update(semesterData);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.updateSubject = async (req, res, next) => {
  const body = req.body;
  try {
    const subjectData = body.subjectData;
    const subject = await Subject.findOne({ where: { id: subjectData.id } });
    await subject.update(subjectData);
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.updatePdf = async (req, res, next) => {
  const body = req.body;
  try {
    const pdfData = body.pdfData;
    const pdf = await Pdf.findOne({ where: { id: pdfData.id } });
    await pdf.update(pdfData);
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
