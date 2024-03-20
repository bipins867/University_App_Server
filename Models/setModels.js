const User = require("./Authentication/User");

const ClubAndSociety = require("./ClubAndSociety/ClubAndSociety");
const ClubMember = require("./ClubAndSociety/ClubMember");

const EventAndNotice = require("./EventAndNotice/EventAndNotice");

const Branch = require("./StudyMaterials/Branch");
const Course = require("./StudyMaterials/Course");

const Subject = require("./StudyMaterials/Subject");
const Semester = require("./StudyMaterials/Semester");
const Pdf = require("./StudyMaterials/Pdf");
const Alumni = require("./UserDashboard/Alumni");
const Faculty = require("./UserDashboard/Faculty");
const Student = require("./UserDashboard/Student");

const Department = require("./Department/Department");
const DepartmentAndFaculty = require("./AndModel/DepartmentAndFaculty");

const ClubAndMembers = require("./AndModel/ClubAndMembers");
const BranchAndSemester = require("./AndModel/BranchAndSemester");
const CourseAndBranch = require("./AndModel/CouseAndBranch");
const SemesterAndSubject = require("./AndModel/SemesterAndSubject");
const SubjectAndPdf = require("./AndModel/SubjectAndPdf");

User.hasOne(Student);
Student.belongsTo(User);

User.hasOne(Faculty);
Faculty.belongsTo(User);

User.hasOne(Alumni);
Alumni.belongsTo(User);

ClubAndSociety.belongsToMany(ClubMember, { through: ClubAndMembers });
ClubMember.belongsToMany(ClubAndSociety, { through: ClubAndMembers });

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
