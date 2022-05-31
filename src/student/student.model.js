const { Sequelize, sequelize } = require("../db.js");
const Branch = require("../branch/branch.model.js")
const Class = require("../class/class.model.js")

class Student extends Sequelize.Model {}

Student.init(
  {
    regNo: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },

    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize }
);


module.exports = Student;
