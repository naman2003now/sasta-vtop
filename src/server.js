const App = require("./app.js");
const StudentController = require("./student/student.controller.js")

const app = new App([new StudentController()]);
