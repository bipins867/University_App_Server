const sequelize = require("../../database");
const User = require("../../Models/Authentication/User");
const Faculty = require("../../Models/UserDashboard/Faculty");
const bcrypt = require("bcrypt");

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
      await currentUser.createFaculty(facultyData, {
        transaction: transaction,
      });
      transaction.commit();
      res.json({ status: "Faculty Added Successfully!" });
    });
  } catch (e) {
    if (transaction) transaction.rollback();

    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};
