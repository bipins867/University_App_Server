const GlobalUser = require("../../Models/GlobalUsers/GlobalUser");
const Course = require("../../Models/StudyMaterials/Course");
const Department = require("../../Models/Department/Department");
const ClubAndSociety = require("../../Models/ClubAndSociety/ClubAndSociety");

function getNotificationObj(body) {
  const obj = {
    title: body.title,
    subTitle: body.subTitle,
    isEvent: body.isEvent,
    createrName: body.createrName,
    createrDesignation: body.createrDesignation,
    fileInof: body.fileInof,
  };

  return obj;
}

exports.createGlobalNotifications = async (req, res, next) => {
  const body = req.body;

  try {
    const globalUser = await GlobalUser.findOne({ where: { id: 1 } });
    const obj = getNotificationObj(body);

    await globalUser.createNotification(obj);
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};
exports.createFacultyNotifications = async (req, res, next) => {
  const body = req.body;
  try {
    const globalUser = await GlobalUser.findOne({ where: { id: 2 } });
    const obj = getNotificationObj(body);

    await globalUser.createNotification(obj);
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};

exports.createCourseNotifications = async (req, res, next) => {
  const body = req.body;
  try {
    const courseId = body.courseId;
    const course = await Course.findOne({ where: { id: courseId } });
    const obj = getNotificationObj(body);

    await course.createNotification(obj);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};
exports.createDepartmentNotifications = async (req, res, next) => {
  const body = req.body;
  try {
    const departmentId = body.departmentId;
    const department = await Department.findOne({
      where: { id: departmentId },
    });
    const obj = getNotificationObj(body);

    await department.createNotification(obj);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};
exports.createClubAndSocietyNotifications = async (req, res, next) => {
  const body = req.body;
  try {
    const clubAndSocietyId = body.clubAndSocietyId;
    const clubAndSociety = await ClubAndSociety.findOne({
      where: { id: clubAndSocietyId },
    });

    const obj = getNotificationObj(body);

    await clubAndSociety.createNotification(obj);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went Wrong!" });
  }
};
