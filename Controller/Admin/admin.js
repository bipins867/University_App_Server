const EventAndNotice = require("../../Models/EventAndNotice/EventAndNotice");
const { sendNotification, createNotificationObj } = require("./admin_utils");

exports.sendGlobalNotification = async (req, res, next) => {
  const body = req.body;

  const obj = createNotificationObj(body, 1111);

  sendNotification(res, obj);
};

exports.sendFacultyNotification = (req, res, next) => {
  const body = req.body;

  const obj = createNotificationObj(body, 2222);
  sendNotification(res, obj);
};

exports.sendStudentNotification = (req, res, next) => {
  const body = req.body;

  const obj = createNotificationObj(body, 3333);
  sendNotification(res, obj);
};
exports.sendAlumniNotification = (req, res, next) => {
  const body = req.body;

  const obj = createNotificationObj(body, 4444);
  sendNotification(res, obj);
};
exports.sendDepartmentNotification = (req, res, next) => {
  const body = req.body;

  const obj = createNotificationObj(body, 5555);
  sendNotification(res, obj);
};
