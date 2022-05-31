const { Router } = require("express");

const CourseModel = require("./course.model.js");

class CourseController {
  router = Router();
  path = "/course";

  constructor() {
    this.#initRoutes();
  }

  #initRoutes() {
    this.router.get("/", this.#homeRoute);

		this.router.post("/create", this.#createCourse)
  }

  async #createCourse(req, res) {
    try {
      const course = await CourseModel.create(req.body);
      res.status(201).send(course);
    } catch (err) {
      res.status(403).send(err);
    }
  }

  #homeRoute(req, res) {
    res.status(200).send("Course Controller");
  }
}

module.exports = CourseController;
