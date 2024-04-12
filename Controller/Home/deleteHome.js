const Leader = require("../../Models/Home/Leaders");
const HomeImages = require("../../Models/Home/HomeImages");
const { where } = require("sequelize");

exports.deleteLeader = async (req, res, next) => {
  const body = req.body;
  try {
    const leaderId = body.leaderId;
    const leader = await Leader.findOne({ where: { id: leaderId } });
    await leader.destroy();
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
exports.deleteImageSlide = async (req, res, next) => {
  const body = req.body;
  try {
    const imageSlideId = body.imageSlideId;
    const imageSlide = await HomeImages.findOne({
      where: { id: imageSlideId },
    });
    await imageSlide.destroy();
    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
