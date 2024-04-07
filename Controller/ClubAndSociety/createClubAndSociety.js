const ClubAndSociety = require("../../Models/ClubAndSociety/ClubAndSociety");
const User = require("../../Models/Authentication/User");
const Student = require("../../Models/UserDashboard/Student");
const { uploadFileWithRandomName } = require("../../Utils/utils");

exports.createClubAndSociety = async (req, res, next) => {
  const body = req.body;

  try {
    const obj = {
      title: body.title,
      subTitle: body.subTitle,
      about: body.about,
      noOfYears: body.noOfYears,
      profilePic: await uploadFileWithRandomName(req),
    };

    await ClubAndSociety.create(obj);
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);

    res.status(500).json({ error: "Something went Wrong!" });
  }
};

exports.addMember = async (req, res, next) => {
  const body = req.body;

  try {
    const collegeId = body.id;
    const clubAndSocietyId = body.clubAndSocietyId;

    const designation = body.designation;

    const user = await User.findOne({
      where: { collegeId: collegeId, userType: "student" },
    });
    const student = await Student.findOne({ where: { UserId: user.id } });

    const clubAndSociety = await ClubAndSociety.findOne({
      where: { id: clubAndSocietyId },
    });

    if (!student || !clubAndSociety) {
      throw "Invalid Semester ID/ Student ID";
    }

    await clubAndSociety.addStudent(student, {
      through: { designation: designation },
    });

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);

    res.status(500).json({ error: "Something went Wrong!" });
  }
};
