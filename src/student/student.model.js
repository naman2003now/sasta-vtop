const { Sequelize, sequelize } = require("../db.js");
const Branch = require("../branch/branch.model.js")

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

// Associations 
Student.belongsTo(Branch);

module.exports = Student;
