const Course = require("../../Models/StudyMaterials/Course");
const Semester = require("../../Models/StudyMaterials/Semester");
const Branch = require("../../Models/StudyMaterials/Branch");
const Subject = require("../../Models/StudyMaterials/Subject");
const { uploadFileWithRandomName } = require("../../Utils/utils");

exports.createCourse = async (req, res, next) => {
  const body = req.body;
  try {
    const obj = {
      title: body.title,
      subTitle: body.subTitle,
      noOfYears: body.noOfYears,
    };
    await Course.create(obj);
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
exports.createBranch = async (req, res, next) => {
  const body = req.body;
  try {
    const courseId = body.courseId;

    const obj = {
      title: body.title,
      subTitle: body.subTitle,
    };

    const course = await Course.findOne({ where: { id: courseId } });

    await course.createBranch(obj);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
exports.createSemester = async (req, res, next) => {
  const body = req.body;
  try {
    const branchId = body.branchId;

    const obj = {
      title: body.title,
      subTitle: body.subTitle,
    };

    const branch = await Branch.findOne({ where: { id: branchId } });
    await branch.createSemester(obj);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
exports.createSubject = async (req, res, next) => {
  const body = req.body;
  try {
    const semesterId = body.semesterId;

    const obj = {
      title: body.title,
      subTitle: body.subTitle,
    };

    const semester = await Semester.findOne({ where: { id: semesterId } });

    await semester.createSubject(obj);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.createPdf = async (req, res, next) => {
  const body = req.body;
  try {
    const subjectId = body.subjectId;

    const obj = {
      title: body.title,
      subTitle: body.subTitle,
      isQuestionPaper: body.isQuestionPaper,
      pdfUrl: await uploadFileWithRandomName(req),
    };

    const subject = await Subject.findOne({ where: { id: subjectId } });

    await subject.createPdf(obj);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
