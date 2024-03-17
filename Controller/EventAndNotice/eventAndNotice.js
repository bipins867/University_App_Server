const EventAndNotice = require("../../Models/EventAndNotice/EventAndNotice");

exports.getEventAndNotifications = async (req, res, next) => {
  const forWhom = req.body.forWhom;

  try {
    const eventResult = await EventAndNotice.findAll({
      where: { forWhom: parseInt(forWhom), isEvent: false },
      order: [["id", "DESC"]],
    });
    const noticeResult = await EventAndNotice.findAll({
      where: { forWhom: parseInt(forWhom), isEvent: true },
      order: [["id", "DESC"]],
    });

    res.json({
      events: eventResult,
      notice: noticeResult,
    });
  } catch (e) {
    console.log(e);
    res.json({ error: "Something went Wrong!" });
  }
};
