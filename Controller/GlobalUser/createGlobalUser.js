const GlobalUser = require("../../Models/GlobalUsers/GlobalUser");

exports.createGlobalUser = async (req, res, next) => {
  const body = req.body;
  try {
    const obj = {
      title: body.title,
      subTitle: body.subTitle,
    };
    await GlobalUser.create(obj);
    res.json({ status: "Successfull!" });
  } catch (e) {
    res.status(500).json({ error: "Something went Wrong!" });
    console.log(e);
  }
};
