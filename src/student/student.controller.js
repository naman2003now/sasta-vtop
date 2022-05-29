const { Router } = require("express");

class StudentController {
  router = Router();
  path = "/student";

  constructor() {
    this.#initRoutes();
  }

  #initRoutes() {
    this.router.get("/", this.#homeRoute);
  }

  #homeRoute(req, res) {
    res.status(200).send("Student Controller!");
  }
}

module.exports = StudentController;
