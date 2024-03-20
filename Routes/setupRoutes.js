const homeRouter = require("./home");
const adminRouter = require("./admin");
const eventAndNoticeRouter = require("./eventAndNotice");
const userRouter = require("./user");
const userDashboardRouter = require("./userDashboard");
const studyMaterialsRouter = require("./StudyMaterials/studyMaterials");
const departmentRouter = require("./Department/department");

exports.setupRotes = (app) => {
  app.use("/home", homeRouter);
  app.use("/admin", adminRouter);
  app.use("/eventAndNotice", eventAndNoticeRouter);
  app.use("/user", userRouter);
  app.use("/dashboard", userDashboardRouter);
  app.use("/studyMaterials", studyMaterialsRouter);
  app.use("/department", departmentRouter);
};
