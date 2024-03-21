const sequelize = require("../../database");
const User = require("../../Models/Authentication/User");
const Course = require("../../Models/StudyMaterials/Course");
const bcrypt = require("bcrypt");

exports.addStudent = async (req, res, next) => {
  const body = req.body;
  let transaction;
  try {
    const userData = {
      collegeId: body.collegeId,
      password: body.password,
      userType: "student",
    };
    const courseId = body.courseId;
    const studentData = {
      name: body.name,
      fathersName: body.fathersName,
      yearOfJoining: body.yearOfJoining,
      email: body.email,
      phone: body.phone,
      address: body.address,
      profilePic: body.profilePic,
    };

    const user = await User.findOne({
      where: {
        collegeId: userData.collegeId,
        userType: userData.userType,
      },
    });

    if (user) {
      return res.status(404).json({ error: "User already Exists" });
    }

    passw = await bcrypt.hash(userData.password, 10);

    userData.password = passw;
    transaction = await sequelize.transaction();
    const currentUser = await User.create(userData, {
      transaction: transaction,
    });
    const student = await currentUser.createStudent(studentData, {
      transaction: transaction,
    });

    const course = await Course.findOne({ where: { id: courseId } });
    if (course == null) {
      throw new Error("Invalid Course Id");
    }
    await course.addStudent(student, { transaction: transaction });
    transaction.commit();
    res.json({ status: "Student Added Successfully!" });
  } catch (e) {
    if (transaction) transaction.rollback();

    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};

exports.addFaculty = async (req, res, next) => {
  const body = req.body;
  let transaction;
  try {
    const userData = {
      collegeId: body.collegeId,
      password: body.password,
      userType: "faculty",
    };

    const facultyData = {
      name: body.name,

      qualification: body.qualification,
      areaOfSpecialization: body.areaOfSpecialization,
      designation: body.designation,
      dateOfJoining: body.dateOfJoining,
      email: body.email,
      phone: body.phone,
      address: body.address,
      profilePic: body.profilePic,
    };

    const user = await User.findOne({
      where: {
        collegeId: userData.collegeId,
        userType: userData.userType,
      },
    });

    if (user) {
      return res.status(404).json({ error: "User already Exists" });
    }

    const passw = await bcrypt.hash(userData.password, 10);

    userData.password = passw;
    transaction = await sequelize.transaction();
    const currentUser = await User.create(userData, {
      transaction: transaction,
    });
    await currentUser.createFaculty(facultyData, {
      transaction: transaction,
    });
    transaction.commit();
    res.json({ status: "Faculty Added Successfully!" });
  } catch (e) {
    if (transaction) transaction.rollback();

    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};

exports.addAlumni = async (req, res, next) => {
  const body = req.body;
  let transaction;
  try {
    const courseId = body.courseId;
    const userData = {
      collegeId: body.collegeId,
      password: body.password,
      userType: "alumni",
    };
    const AlumniData = {
      name: body.name,
      yearOfPassing: body.yearOfPassing,
      currentAffiliation: body.currentAffiliation,
      email: body.email,
      phone: body.phone,
      address: body.address,
      profilePic: body.profilePic,
    };

    const user = await User.findOne({
      where: {
        collegeId: userData.collegeId,
        userType: userData.userType,
      },
    });

    if (user) {
      return res.status(404).json({ error: "User already Exists" });
    }

    const passw = await bcrypt.hash(userData.password, 10);

    userData.password = passw;
    transaction = await sequelize.transaction();
    const currentUser = await User.create(userData, {
      transaction: transaction,
    });
    const alumni = await currentUser.createAlumni(AlumniData, {
      transaction: transaction,
    });

    const course = await Course.findOne({ where: { id: courseId } });
    if (course == null) {
      throw new Error("Invalid Course Id");
    }
    await course.addAlumni(alumni, { transaction: transaction });
    transaction.commit();
    res.json({ status: "Alumni Added Successfully!" });
  } catch (e) {
    if (transaction) transaction.rollback();

    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};
