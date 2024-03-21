const ClubAndSociety = require("../../Models/ClubAndSociety/ClubAndSociety");
const Student = require("../../Models/UserDashboard/Student");

const User = require("../../Models/Authentication/User");

exports.updateAdmin = async (req, res, next) => {
  const body = req.body;

  try {
    const collegeId = body.collegeId;
    const clubAndSocietyId = body.clubAndSocietyId;
    const isAdmin = body.isAdmin;

    const user = await User.findOne({
      where: { collegeId: collegeId, userType: "student" },
    });

    const clubAndSociety = await ClubAndSociety.findOne({
      where: { id: clubAndSocietyId },
    });

    const student = await user.getStudent();

    await clubAndSociety.setStudents(student, {
      through: {
        isAdmin: isAdmin,
      },
    });
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);

    res.status(500).json({ error: "Something went Wrong!" });
  }
};
