const Department = require("../../Models/Department/Department");
const Faculty = require("../../Models/UserDashboard/Faculty");

exports.updateDepartmentHod = async (req, res, next) => {
  const body = req.body;

  try {
    const hodId = body.hodId;
    const departmentId = body.departmentId;

    const department = await Department.findOne({
      where: { id: departmentId },
    });

    const faculty = await department.getFaculties({ where: { id: hodId } });

    if (faculty.length == 0) {
      throw "Faculty must be the member of the Department";
    }

    await Department.update({ hodId: hodId }, { where: { id: departmentId } });

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};

exports.addFaculty = async (req, res, next) => {
  const body = req.body;

  try {
    const facultyId = body.facultyId;
    const departmentId = body.departmentId;

    const faculty = await Faculty.findOne({ where: { id: facultyId } });

    const department = await Department.findOne({
      where: { id: departmentId },
    });

    if (!faculty || !department) {
      throw "Invalid Faculty Id / Department Id!";
    }
    await department.addFaculty(faculty);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};
