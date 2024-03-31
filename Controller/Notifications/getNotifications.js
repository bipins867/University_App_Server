const GlobalUser = require("../../Models/GlobalUsers/GlobalUser");
const Course = require("../../Models/StudyMaterials/Course");
const Department = require("../../Models/Department/Department");
const ClubAndSociety = require("../../Models/ClubAndSociety/ClubAndSociety");
const Notification = require("../../Models/Notification/Notification");

async function fetchNotifications(model) {
  const events = await model.getNotifications({
    where: { isEvent: true },
    order: [["id", "desc"]],
    limit: 10,
  });
  const notices = await model.getNotifications({
    where: { isEvent: false },
    order: [["id", "desc"]],
    limit: 10,
  });
  const obj = { events: events, notices: notices };
  return obj;
}
exports.getAllNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.findAll();
    res.json({ notifications: notifications });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.getGlobalNotifications = async (req, res, next) => {
  const body = req.body;
  try {
    const globalUser = await GlobalUser.findOne({ where: { id: 1 } });

    const obj = await fetchNotifications(globalUser);

    res.json({ status: "Successfull!", ...obj });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
exports.getFacultyNotifications = async (req, res, next) => {
  const body = req.body;
  try {
    const globalUser = await GlobalUser.findOne({ where: { id: 2 } });

    const obj = await fetchNotifications(globalUser);

    res.json({ status: "Successfull!", ...obj });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
exports.getCourseNotifications = async (req, res, next) => {
  const body = req.body;
  try {
    const courseId = body.courseId;
    const course = await Course.findOne({ where: { id: courseId } });

    const obj = await fetchNotifications(course);

    res.json({ status: "Successfull!", ...obj });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
exports.getDepartmentNotifications = async (req, res, next) => {
  const body = req.body;
  try {
    const departmentId = body.departmentId;
    const department = await Department.findOne({
      where: { id: departmentId },
    });

    const obj = await fetchNotifications(department);

    res.json({ status: "Successfull!", ...obj });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
exports.getClubAndSocietyNotifications = async (req, res, next) => {
  const body = req.body;
  try {
    const clubAndSocietyId = body.clubAndSocietyId;
    const clubAndSociety = await ClubAndSociety.findOne({
      where: { id: clubAndSocietyId },
    });

    const obj = await fetchNotifications(clubAndSociety);

    res.json({ status: "Successfull!", ...obj });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something Went Wrong!" });
  }
};
