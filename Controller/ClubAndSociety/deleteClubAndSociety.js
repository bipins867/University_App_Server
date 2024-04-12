const ClubAndSociety = require("../../Models/ClubAndSociety/ClubAndSociety");

exports.deleteClubAndSociety = async (req, res, next) => {
  const body = req.body;
  try {
    const clubAndSocietyId = body.clubAndSocietyId;
    const clubAndSociety = await ClubAndSociety.findOne({
      where: { id: clubAndSocietyId },
    });
    await clubAndSociety.destroy();

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};

exports.deleteStudent = async (req, res, next) => {
  const body = req.body;
  try {
    const clubAndSocietyId = body.clubAndSocietyId;
    const studentId = body.studentId;

    const clubAndSociety = await ClubAndSociety.findOne({
      where: { id: clubAndSocietyId },
    });

    const student = await clubAndSociety.getStudents({
      where: { id: studentId },
    });
    await clubAndSociety.removeStudent(student);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
