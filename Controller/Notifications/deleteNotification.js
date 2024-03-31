const Notification = require("../../Models/Notification/Notification");

exports.deleteNotification = async (req, res, next) => {
  const body = req.body;
  try {
    const notificationId = body.notificationId;
    const notification = await Notification.findOne({
      where: { id: notificationId },
    });
    await notification.destroy();

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
