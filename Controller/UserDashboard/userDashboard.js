exports.getUserInfo = async (req, res, next) => {
  const user = req.user;

  try {
    let userInfo;
    if (user.userType == "student") {
      userInfo = await user.getStudent();
    } else if (user.userType == "faculty") {
      userInfo = await user.getFaculty();
    } else if (user.userType == "alumni") {
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
