const User = require("../../Models/Authentication/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    const body = req.body;
    const userData = {
      collegeId: body.collegeId,
      password: body.password,
      userType: body.userType,
    };

    const user = await User.findOne({
      where: {
        collegeId: userData.collegeId,
        userType: userData.userType,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User don't Exists!" });
    }

    bcrypt.compare(userData.password, user.password, async (err, response) => {
      if (err) {
        throw new Error("Invalid Password Format!");
      }

      if (response) {
        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.JWT_SECRET_KEY
        );
        var userInfo;
        const userType = body.userType;
        if (userType == "student") {
          userInfo = await user.getStudent();
        } else if (userType == "faculty") {
          userInfo = await user.getFaculty();
        } else {
          userInfo = await user.getAlumni();
        }

        res.json({
          status: "Login Successfull",
          token: token,
          userType: user.userType,
          userInfo: userInfo,
        });
      } else {
        return res.status(500).json({ error: "Invalid Password!" });
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
