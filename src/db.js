const { Sequelize } = require("sequelize");

var sequelize = new Sequelize("vtop", "naman", "password", {
  host: "localhost",
  dialect: "postgres",
});

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to Postgres");
		sequelize.sync({force: true})
  } catch (err) {
    console.log("Error while connecting to database", err);
  }

};

authenticate();
module.exports = { Sequelize, sequelize };
