const App = require("./app.js");
const BranchController = require("./branch/branch.controller.js");
const StudentController = require("./student/student.controller.js")

const app = new App([new StudentController(), new BranchController()]);
