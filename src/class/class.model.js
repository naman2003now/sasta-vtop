const { Sequelize, sequelize } = require("../db.js");
const Faculty = require("../faculty/faculty.model.js");
const Student = require("../student/student.model.js");
const Course = require("../course/course.model.js");

class Class extends Sequelize.Model {}

Class.init({}, { sequelize });


module.exports = Class;
