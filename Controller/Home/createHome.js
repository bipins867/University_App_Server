const Leader = require("../../Models/Home/Leaders");
const HomeImages = require("../../Models/Home/HomeImages");
const { uploadFileWithRandomName } = require("../../Utils/utils");

exports.addLeader = async (req, res, next) => {
  const body = req.body;
  try {
    const data = {
      name: body.name,
      subTitle: body.subTitle,
      profilePic: await uploadFileWithRandomName(req),
    };
    await Leader.create(data);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};

exports.addImageSlide = async (req, res, next) => {
  const body = req.body;
  try {
    const obj = {
      key: body.key,
      imageUrl: await uploadFileWithRandomName(req),
    };
    await HomeImages.create(obj);

    res.json({ status: "Successfull!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.toString() });
  }
};
