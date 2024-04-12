const User = require("../../Models/Authentication/User");

exports.deleteStudent = async (req, res, next) => {
  const body = req.body;
  try {
    const userId = body.userId;
    const user = await User.findOne({ where: { id: userId } });
    const student = await user.getStudent();
    await user.destroy();
    await student.destroy();
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.deleteAlumni = async (req, res, next) => {
  const body = req.body;
  try {
    const userId = body.userId;
    const user = await User.findOne({ where: { id: userId } });
    const alumni = await user.getAlumni();
    await user.destroy();
    await alumni.destroy();
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.deleteFaculty = async (req, res, next) => {
  const body = req.body;
  try {
    const userId = body.userId;
    const user = await User.findOne({ where: { id: userId } });
    const faculty = await user.getFaculty();
    await user.destroy();
    await faculty.destroy();
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
