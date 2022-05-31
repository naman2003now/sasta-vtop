const { Router } = require("express");
const FacultyModel = require("./faculty.model.js")

class FacultyController {
  router = Router();
  path = "/faculty";

  constructor() {
    this.#initRoutes();
  }

  #initRoutes() {
    this.router.get("/", this.#homeRoute);

    this.router.post("/create", this.#createFaculty);
  }

  #homeRoute(req, res) {
    res.status(200).send("Faculty Controller");
  }

  async #createFaculty(req, res) {
    try {
      const faculty = await FacultyModel.create(req.body);
      res.status(201).send(faculty);
    } catch (err) {
      res.status(403).send(err);
    }
  }
}

module.exports = FacultyController;
