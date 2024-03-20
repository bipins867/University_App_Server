const Department = require("../../Models/Department/Department");

exports.createDepartment = async (req, res, next) => {
  const body = req.body;

  try {
    const obj = {
      title: body.title,
      subTitle: body.subTitle,
      about: body.about,
    };
    await Department.create(obj);
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};
