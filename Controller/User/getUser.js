const User = require("../../Models/Authentication/User");
const Student = require("../../Models/UserDashboard/Student");
const Faculty = require("../../Models/UserDashboard/Faculty");
const Alumni = require("../../Models/UserDashboard/Alumni");
const Course = require("../../Models/StudyMaterials/Course");
const Department = require("../../Models/Department/Department");

exports.getAllStudents = async (req, res, next) => {
  const body = req.body;

  try {
    const students = await Student.findAll();
    res.json({ status: "Successfull!", students: students });
  } catch (e) {
    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};
exports.getAllFaculty = async (req, res, next) => {
  const body = req.body;

  try {
    const faculties = await Faculty.findAll();
    res.json({ status: "Successfull!", faculties: faculties });
  } catch (e) {
    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};
exports.getAllAlumni = async (req, res, next) => {
  const body = req.body;

  try {
    const alumnis = await Alumni.findAll();
    res.json({ status: "Successfull!", alumnis: alumnis });
  } catch (e) {
    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};

exports.getCourseStudents = async (req, res, next) => {
  const body = req.body;

  try {
    const courseId = body.courseId;
    const course = await Course.findOne({ where: { id: courseId } });

    const students = await course.getStudents();
    res.json({ status: "Successfull!", students: students });
  } catch (e) {
    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};
exports.getDepartmentFaculty = async (req, res, next) => {
  const body = req.body;

  try {
    const departmentId = body.departmentId;
    const department = await Department.findOne({
      where: { id: departmentId },
    });

    const faculties = await department.getFaculties();
    res.json({ status: "Successfull!", faculties: faculties });
  } catch (e) {
    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};

exports.getUserInfo = async (req, res, next) => {
  const body = req.body;

  try {
    const collegeId = body.collegeId;
    const userType = body.userType;
    const user = await User.findOne({
      where: { collegeId: collegeId, userType: userType },
    });
    let userInfo;
    if (userType == "student") {
      userInfo = await user.getStudent();
    } else if (userType == "faculty") {
      userInfo = await user.getFaculty();
    } else if (userType == "alumni") {
      userInfo = await user.getAlumni();
    } else {
      return res
        .status(500)
        .json({ error: "Something went wrong on Server side!" });
    }

    res.json({
      status: "Successfull!",
      userInfo: { ...userInfo.dataValues, collegeId: user.collegeId },
    });
  } catch (e) {
    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};
