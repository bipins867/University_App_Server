const User = require("../../Models/Authentication/User");
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

exports.addFacultyToDepartment = async (req, res, next) => {
  const body = req.body;
  try {
    const collegeId = body.collegeId;
    const departmentId = body.departmentId;

    const user = await User.findOne({
      where: {
        collegeId: collegeId,
        userType: "faculty",
      },
    });
    const faculty = await user.getFaculty();

    const department = await Department.findOne({
      where: { id: departmentId },
    });

    await department.addFaculty(faculty);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};
