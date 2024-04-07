const Leader = require("../../Models/Home/Leaders");
const HomeImages = require("../../Models/Home/HomeImages");

exports.getAllLeaders = async (req, res, next) => {
  try {
    const leaders = await Leader.findAll();
    res.json({ status: "Successfull!", leaders: leaders });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};

exports.getAllHomeImages = async (req, res, next) => {
  try {
    const homeImages = await HomeImages.findAll();
    res.json({ status: "Successfull!", homeImages: homeImages });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
