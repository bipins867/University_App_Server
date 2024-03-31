const AdminUser = require("../../Models/AdminUser/AdminUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createAdminUser = async (req, res, next) => {
  const body = req.body;

  try {
    const obj = {
      userName: body.userName,
      password: body.password,
    };

    const adminUser = await AdminUser.findOne({
      where: { userName: obj.password },
    });

    if (adminUser) {
      throw new Error("User Already Exist's");
    }
    obj.password = await bcrypt.hash(obj.password, 10);

    await AdminUser.create(obj);

    res.json({ status: "Successfulll!" });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.verifyAdminUser = async (req, res, next) => {
  const body = req.body;
  try {
    const userName = body.userName;
    const password = body.password;

    const adminUser = await AdminUser.findOne({
      where: { userName: userName },
    });

    if (adminUser == null) {
      throw new Error("User don't exists");
    }
    const passCond = await bcrypt.compare(password, adminUser.password);
    if (!passCond) {
      throw new Error("Invalid Password!");
    }

    const token = jwt.sign(
      {
        id: adminUser.id,
      },
      process.env.JWT_SECRET_KEY
    );
    res.json({
      status: "Successfull!",
      token: token,
    });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
