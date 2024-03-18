const sequelize = require("../../database");
const User = require("../../Models/Authentication/User");
const Alumni = require("../../Models/UserDashboard/Alumni");
const bcrypt = require("bcrypt");

exports.addAlumni = async (req, res, next) => {
  const body = req.body;
  let transaction;
  try {
    const userData = {
      collegeId: body.collegeId,
      password: body.password,
      userType: "alumni",
    };
    const AlumniData = {
      name: body.name,
      course: body.course,
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

    bcrypt.hash(userData.password, 10, async (err, passw) => {
      if (err) {
        throw new Error("Password Error!");
      }
      userData.password = passw;
      transaction = await sequelize.transaction();
      const currentUser = await User.create(userData, {
        transaction: transaction,
      });
      await currentUser.createAlumni(AlumniData, {
        transaction: transaction,
      });
      transaction.commit();
      res.json({ status: "Alumni Added Successfully!" });
    });
  } catch (e) {
    if (transaction) transaction.rollback();

    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};
