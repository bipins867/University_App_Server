const User = require("../../Models/Authentication/User");
const Faculty = require("../../Models/UserDashboard/Faculty");

exports.getAllFacultyList = (req, res, next) => {
  Faculty.findAll({
    include: {
      model: User,
      attributes: ["collegeId"],
    },
  })
    .then((faculties) => {
      res.json({ status: "Successfull!", faculties: faculties });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ error: "Something went Wrong!" });
    });
};
