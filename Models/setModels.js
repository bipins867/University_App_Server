const HomeImage = require("./Home/HomeImages");
const Leader = require("./Home/Leaders");

const AdminUser = require("./AdminUser/AdminUser");

const User = require("./Authentication/User");

const ClubAndSociety = require("./ClubAndSociety/ClubAndSociety");

const Notification = require("./Notification/Notification");

const Branch = require("./StudyMaterials/Branch");
const Course = require("./StudyMaterials/Course");

const Subject = require("./StudyMaterials/Subject");
const Semester = require("./StudyMaterials/Semester");
const Pdf = require("./StudyMaterials/Pdf");
const Alumni = require("./UserDashboard/Alumni");
const Faculty = require("./UserDashboard/Faculty");
const Student = require("./UserDashboard/Student");

const GlobalUser = require("./GlobalUsers/GlobalUser");

const Department = require("./Department/Department");
const DepartmentAndFaculty = require("./AndModel/DepartmentAndFaculty");

const BranchAndSemester = require("./AndModel/BranchAndSemester");
const CourseAndBranch = require("./AndModel/CouseAndBranch");
const SemesterAndSubject = require("./AndModel/SemesterAndSubject");
const SubjectAndPdf = require("./AndModel/SubjectAndPdf");
const ClubAndSocietyAndMembers = require("./AndModel/ClubAndSocietyAndMembers");

User.hasOne(Student);
Student.belongsTo(User);

User.hasOne(Faculty);
Faculty.belongsTo(User);

User.hasOne(Alumni);
Alumni.belongsTo(User);

Course.hasMany(Student);
Student.belongsTo(Course);

Course.hasMany(Alumni);
Alumni.belongsTo(Course);

Course.belongsToMany(Branch, { through: CourseAndBranch });
Branch.belongsToMany(Course, { through: CourseAndBranch });

Branch.belongsToMany(Semester, { through: BranchAndSemester });
Semester.belongsToMany(Branch, { through: BranchAndSemester });

Semester.belongsToMany(Subject, { through: SemesterAndSubject });
Subject.belongsToMany(Semester, { through: SemesterAndSubject });

Subject.belongsToMany(Pdf, { through: SubjectAndPdf });
Pdf.belongsToMany(Subject, { through: SubjectAndPdf });

Department.belongsToMany(Faculty, { through: DepartmentAndFaculty });
Faculty.belongsToMany(Department, { through: DepartmentAndFaculty });

ClubAndSociety.belongsToMany(Student, { through: ClubAndSocietyAndMembers });
Student.belongsToMany(ClubAndSociety, { through: ClubAndSocietyAndMembers });

Course.hasMany(Notification);
Notification.belongsTo(Course);

Department.hasMany(Notification);
Notification.belongsTo(Department);

ClubAndSociety.hasMany(Notification);
Notification.belongsTo(ClubAndSociety);

GlobalUser.hasMany(Notification);
Notification.belongsTo(GlobalUser);
