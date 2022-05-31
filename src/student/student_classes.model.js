const {Sequelize, sequelize} = require("../db")

class student_classes extends Sequelize.Model{}

student_classes.init({}, {sequelize, modelName: "student_classes"})

module.exports = student_classes;
