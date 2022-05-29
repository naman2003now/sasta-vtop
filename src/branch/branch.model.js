const { Sequelize, sequelize } = require("../db.js");
class Branch extends Sequelize.Model {}

Branch.init({
  code: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  abbrivation: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {sequelize});

module.exports = Branch;
