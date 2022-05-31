const Student = require("./student/student.model.js");
const Faculty = require("./faculty/faculty.model.js");
const Course = require("./course/course.model.js");
const Class = require("./class/class.model.js")
const Branch = require("./branch/branch.model.js")

module.exports = () => {
  Class.belongsToMany(Student, { through: "student_classes" });
  Class.belongsTo(Faculty);
  Class.belongsTo(Course);

	Student.belongsToMany(Class, {through: "student_classes"})
	Student.belongsTo(Branch);

	Faculty.hasMany(Class)
};

