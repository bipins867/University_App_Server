// const homeRouter = require("./home");
// const adminRouter = require("./admin");
// const eventAndNoticeRouter = require("./eventAndNotice");
// const userRouter = require("./user");
// const userDashboardRouter = require("./userDashboard");
const studyMaterialsRouter = require("./StudyMaterials/studyMaterials");
const departmentRouter = require("./Department/department");
const clubAndSocietyRouter = require("./ClubAndSociety/clubAndSociety");
const userRouter = require("./User/user");
const globalUserRouter = require("./GlobalUser/globalUser");
const notificationsRouter = require("./Notifications/notifications");
const authenticationRouter = require("./Authentication/authentication");
const adminRouter = require("./AdminUser/admin");

exports.setupRotes = (app) => {
  app.use("/studyMaterials", studyMaterialsRouter);
  app.use("/department", departmentRouter);
  app.use("/clubAndSociety", clubAndSocietyRouter);
  app.use("/user", userRouter);
  app.use("/globalUser", globalUserRouter);
  app.use("/notifications", notificationsRouter);
  app.use("/auth", authenticationRouter);
  app.use("/admin", adminRouter);
  // app.use("/home", homeRouter);
  // app.use("/admin", adminRouter);
  // app.use("/eventAndNotice", eventAndNoticeRouter);
  // app.use("/user", userRouter);
  // app.use("/dashboard", userDashboardRouter);
};
