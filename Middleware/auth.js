const jwt = require("jsonwebtoken");
const User = require("../Models/Authentication/User");

exports.userAuthentication = async (req, res, next) => {
  try {
    const token = req.headers.token;
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findByPk(payload.id);

    req.user = user;

    next();
  } catch (err) {
    return res.status(500).json({ error: "Invalid Signature!" });
  }
};
