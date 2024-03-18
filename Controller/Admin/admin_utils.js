const EventAndNotice = require("../../Models/EventAndNotice/EventAndNotice");

exports.sendNotification = async (res, obj) => {
  try {
    await EventAndNotice.create(obj);
    res.json({ status: "Notification Sent Successfully" });
  } catch (e) {
    res.status(500).json({ error: "Something went Wrong!" });
    console.log("Error", e);
  }
};

exports.createNotificationObj = (body, forWhom) => {
  return (obj = {
    title: body.title,
    subTitle: body.subTitle,
    isEvent: body.isEvent,
    forWhom: forWhom,
    createrName: body.createrName,
    createrDesignation: body.createrDesignation,
    fileInfo: "",
  });
};
