const { Sequelize, sequelize } = require("../db.js");
const Class = require("../class/class.model.js")

class Faculty extends Sequelize.Model {}

Faculty.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);



module.exports = Faculty;
