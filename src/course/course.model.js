const { Sequelize, sequelize } = require("../db.js");

class Course extends Sequelize.Model {}

Course.init(
  {
    code: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    abbrivation: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { sequelize }
);

module.exports = Course;
