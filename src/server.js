const App = require("./app.js");
const BranchController = require("./branch/branch.controller.js");
const StudentController = require("./student/student.controller.js");
const CourseController = require("./course/course.controller.js");
const FacultyController = require("./faculty/faculty.controller.js")
const ClassController = require("./class/class.controller.js")

const app = new App([
  new StudentController(),
  new BranchController(),
  new CourseController(),
	new FacultyController(),
	new ClassController(),
]);
