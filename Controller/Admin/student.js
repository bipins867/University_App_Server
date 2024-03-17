const sequelize = require("../../database");
const User = require("../../Models/Authentication/User");
const Student = require("../../Models/UserDashboard/Student");
const bcrypt = require("bcrypt");

exports.addStudents = async (req, res, next) => {
  const body = req.body;
  let transaction;
  try {
    const userData = {
      collegeId: body.collegeId,
      password: body.password,
      userType: "student",
    };
    const studentData = {
      name: body.name,
      fathersName: body.fathersName,
      department: body.department,
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

    bcrypt.hash(userData.password, 10, async (err, passw) => {
      if (err) {
        throw new Error("Password Error!");
      }
      userData.password = passw;
      transaction = await sequelize.transaction();
      const currentUser = await User.create(userData, {
        transaction: transaction,
      });
      await currentUser.createStudent(studentData, {
        transaction: transaction,
      });
      transaction.commit();
      res.json({ status: "Student Added Successfully!" });
    });
  } catch (e) {
    if (transaction) transaction.rollback();

    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};
