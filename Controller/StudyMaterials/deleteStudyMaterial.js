const Course = require("../../Models/StudyMaterials/Course");
const Semester = require("../../Models/StudyMaterials/Semester");
const Branch = require("../../Models/StudyMaterials/Branch");
const Subject = require("../../Models/StudyMaterials/Subject");
const Pdf = require("../../Models/StudyMaterials/Pdf");

exports.deleteCourse = async (req, res, next) => {
  const body = req.body;
  try {
    const courseId = body.courseId;
    const course = await Course.findOne({ where: { id: courseId } });

    await course.destroy();

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.deleteSemester = async (req, res, next) => {
  const body = req.body;
  try {
    const semesterId = body.semesterId;
    const semester = await Semester.findOne({ where: { id: semesterId } });

    await semester.destroy();

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};

exports.deleteBranch = async (req, res, next) => {
  const body = req.body;
  try {
    const branchId = body.branchId;
    const branch = await Branch.findOne({ where: { id: branchId } });

    await branch.destroy();

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.deleteSubject = async (req, res, next) => {
  const body = req.body;
  try {
    const subjectId = body.subjectId;
    const subject = await Subject.findOne({ where: { id: subjectId } });

    await subject.destroy();

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.deletePdf = async (req, res, next) => {
  const body = req.body;
  try {
    const pdfId = body.pdfId;
    const pdf = await Pdf.findOne({ where: { id: pdfId } });

    await pdf.destroy();

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
