const Department = require("../../Models/Department/Department");

exports.deleteDepartment = async (req, res, next) => {
  const body = req.body;
  try {
    const departmentId = body.departmentId;
    const department = await Department.findOne({
      where: { id: departmentId },
    });
    await department.destroy();
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.deleteFaculty = async (req, res, next) => {
  const body = req.body;
  try {
    const departmentId = body.departmentId;
    const facultyId = body.facultyId;
    const department = await Department.findOne({
      where: { id: departmentId },
    });

    const faculty = await department.getFaculties({ where: { id: facultyId } });
    await department.removeFaculty(faculty);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
