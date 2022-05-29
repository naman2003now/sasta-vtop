const express = require("express");
const cors = require("cors");

const {PORT} = require("./db.js")

class App {
  app = express();

  constructor(controllers) {
    this.#useMiddlewares();
    this.#initHomeRoute();
    this.#listen();
  }

  #useMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  #initHomeRoute() {
    this.app.get("/", () => {
      res.send("You have arrived at the sasta VTOP api");
    });
  }

  #listen() {
    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
}

module.exports = App;
