const ClubAndSociety = require("../../Models/ClubAndSociety/ClubAndSociety");

exports.getClubAndSocietes = async (req, res, next) => {
  const body = req.body;

  try {
    const clubAndSocieties = await ClubAndSociety.findAll();

    res.json({ status: "Successfull!", clubAndSocieties: clubAndSocieties });
  } catch (e) {
    console.log(e);

    res.status(500).json({ error: "Something went Wrong!" });
  }
};

exports.getMembers = async (req, res, next) => {
  const body = req.body;

  try {
    const clubAndSocietyId = body.clubAndSocietyId;

    const clubAndSociety = await ClubAndSociety.findOne({
      where: { id: clubAndSocietyId },
    });

    const members = await clubAndSociety.getStudents();

    res.json({ status: "Successfull!", members: members });
  } catch (e) {
    console.log(e);

    res.status(500).json({ error: "Something went Wrong!" });
  }
};
