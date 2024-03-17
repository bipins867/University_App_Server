const homeRouter = require("./home");
const adminRouter = require("./admin");
const eventAndNoticeRouter = require("./eventAndNotice");
const userRouter = require("./user");
const userDashboardRouter = require("./userDashboard");

exports.setupRotes = (app) => {
  app.use("/home", homeRouter);
  app.use("/admin", adminRouter);
  app.use("/eventAndNotice", eventAndNoticeRouter);
  app.use("/user", userRouter);
  app.use("/dashboard", userDashboardRouter);
};
