const User = require("../../Models/Authentication/User");
const Student = require("../../Models/UserDashboard/Student");
const Alumni = require("../../Models/UserDashboard/Alumni");
const Faculty = require("../../Models/UserDashboard/Faculty");

exports.updateStudentAdmin = async (req, res, next) => {
  const body = req.body;

  try {
    const collegeId = body.collegeId;
    const isAdmin = body.isAdmin;

    const user = await User.findOne({
      where: { collegeId: collegeId, userType: "student" },
    });

    const student = await user.getStudent();
    await student.update({ isAdmin: isAdmin });
    res.json({ status: "Successfull!" });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.updateStudentInfo = async (req, res, next) => {
  const body = req.body;

  try {
    const studentInfo = body.studentInfo;

    const student = await Student.findOne({
      where: { UserId: studentInfo.UserId },
    });

    await student.update(studentInfo);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};

exports.updateAlumniInfo = async (req, res, next) => {
  const body = req.body;

  try {
    const info = body.alumniInfo;

    const alumni = await Alumni.findOne({
      where: { UserId: info.UserId },
    });

    await alumni.update(info);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};

exports.updateFacultyInfo = async (req, res, next) => {
  const body = req.body;

  try {
    const info = body.facultyInfo;

    const faculty = await Faculty.findOne({
      where: { UserId: info.UserId },
    });

    await faculty.update(info);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
