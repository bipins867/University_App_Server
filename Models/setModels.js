const User = require("./Authentication/User");

const ClubAndSociety = require("./ClubAndSociety/ClubAndSociety");
const ClubMember = require("./ClubAndSociety/ClubMember");

const EventAndNotice = require("./EventAndNotice/EventAndNotice");

const Branch = require("./StudyMaterials/Branch");
const Course = require("./StudyMaterials/Course");
const StudyMaterials = require("./StudyMaterials/StudyMaterial");
const Subject = require("./StudyMaterials/Subject");

const Alumni = require("./UserDashboard/Alumni");
const Faculty = require("./UserDashboard/Faculty");
const Student = require("./UserDashboard/Student");

// Student.hasMany(EventAndNotice);
// EventAndNotice.belongsTo(Student);

// Faculty.hasMany(EventAndNotice);
// EventAndNotice.belongsTo(Faculty);

Course.hasMany(Branch);
Branch.belongsTo(Course);

Branch.hasMany(Subject);
Subject.belongsTo(Branch);
