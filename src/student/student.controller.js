const { Router } = require("express");

const StudentModel = require("./student.model.js");

class StudentController {
  router = Router();
  path = "/student";

  constructor() {
    this.#initRoutes();
  }

  #initRoutes() {
    this.router.get("/", this.#homeRoute);

    this.router.post("/create", this.#createStudent);
  }

  #homeRoute(req, res) {
    res.status(200).send("Student Controller!");
  }

  async #createStudent(req, res) {
    try {
      const student = await StudentModel.create(req.body);
      res.status(201).send(student);
    } catch (err) {
      res.status(403).send(err);
    }
  }
}

module.exports = StudentController;
