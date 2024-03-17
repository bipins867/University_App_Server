const EventAndNotice = require("../../Models/EventAndNotice/EventAndNotice");

exports.sendGlobalNotification = async (req, res, next) => {
  const body = req.body;
  const user = req.user;

  const obj = {
    title: body.title,
    subTitle: body.subTitle,
    isEvent: body.isEvent,
    forWhom: 1111,
    createrName: body.name,
    createrDesignation: "VC",
    fileInfo: "",
  };

  try {
    await EventAndNotice.create(obj);
    res.json({ status: "Notification Sent Successfully" });
  } catch (e) {
    res.status(500).json({ error: "Something went Wrong!" });
    console.log("Error", e);
  }
};

exports.sendFacultyNotification = (req, res, next) => {
  res.json({ id: 2 });
};

exports.getFacultyList = (req, res, next) => {
  res.json({ id: 3 });
};
