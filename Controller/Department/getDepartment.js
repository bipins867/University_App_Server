const Department = require("../../Models/Department/Department");

exports.getDepartments = async (req, res, next) => {
  const body = req.body;

  try {
    const departments = await Department.findAll();
    res.json({ status: "Successfull!", departments: departments });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};

exports.getFacultyList = async (req, res, next) => {
  const body = req.body;

  try {
    const departmentId = body.departmentId;

    const department = await Department.findOne({
      where: { id: departmentId },
    });

    const faculties = await department.getFaculties();

    res.json({
      status: "Successfull!",
      faculties: faculties,
      hodId: department.hodId,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};
