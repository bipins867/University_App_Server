const ClubAndSociety = require("../../Models/ClubAndSociety/ClubAndSociety");
const Student = require("../../Models/UserDashboard/Student");
const ClubAndSocietyAndMembers = require("../../Models/AndModel/ClubAndSocietyAndMembers");

const User = require("../../Models/Authentication/User");

exports.updateAdmin = async (req, res, next) => {
  const body = req.body;

  try {
    const studentId = body.studentId;
    const clubAndSocietyId = body.clubAndSocietyId;
    const isAdmin = body.isAdmin;

    const clubAndSocietyAndMember = await ClubAndSocietyAndMembers.findOne({
      where: {
        StudentId: studentId,
        ClubAndSocietyId: clubAndSocietyId,
      },
    });
    clubAndSocietyAndMember.isAdmin = isAdmin;
    await clubAndSocietyAndMember.save();

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);

    res.status(500).json({ error: "Something went Wrong!" });
  }
};

exports.updateInfo = async (req, res, next) => {
  const body = req.body;
  try {
    const clubAndSocietyInfo = body.clubAndSocietyInfo;

    const clubAndSociety = await ClubAndSociety.findOne({
      where: { id: clubAndSocietyInfo.id },
    });

    await clubAndSociety.update(clubAndSocietyInfo);

    res.json({ status: "Successfull!" });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
