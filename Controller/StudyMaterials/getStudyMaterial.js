const Course = require("../../Models/StudyMaterials/Course");
const Semester = require("../../Models/StudyMaterials/Semester");
const Branch = require("../../Models/StudyMaterials/Branch");
const Subject = require("../../Models/StudyMaterials/Subject");

exports.getCourse = async (req, res, next) => {
  try {
    const course = await Course.findAll();
    res.json({ status: "Successfull!", courses: course });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.getBranch = async (req, res, next) => {
  const body = req.body;

  try {
    const courseId = body.courseId;
    const course = await Course.findOne({ where: { id: courseId } });
    const branches = await course.getBranches();

    res.json({ status: "Successfull", branches: branches });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
exports.getSemester = async (req, res, next) => {
  const body = req.body;

  try {
    const branchId = body.branchId;
    const branch = await Branch.findOne({ where: { id: branchId } });
    const semesters = await branch.getSemesters();

    res.json({ status: "Successfull", semesters: semesters });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.getSubject = async (req, res, next) => {
  const body = req.body;
  try {
    const semesterId = body.semesterId;
    const semester = await Semester.findOne({ where: { id: semesterId } });
    const subjects = await semester.getSubjects();

    res.json({ status: "Successfull!", subjects: subjects });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.getPdf = async (req, res, next) => {
  const body = req.body;
  try {
    const subjectId = body.subjectId;
    const all = body.all;

    const subject = await Subject.findOne({ where: { id: subjectId } });
    if (all) {
      const pdfs = await subject.getPdfs();
      res.json({ status: "Successfull!", pdfs: pdfs });
    } else {
      const questionPaperPdf = await subject.getPdfs({
        where: { isQuestionPaper: true },
      });
      const studyMaterialPdf = await subject.getPdfs({
        where: { isQuestionPaper: false },
      });
      res.json({
        status: "Successfull!",
        questionPaperPdf: questionPaperPdf,
        studyMaterialPdf: studyMaterialPdf,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
