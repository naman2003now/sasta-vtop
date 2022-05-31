const { Router } = require("express");
const ClassModel = require("./class.model.js");
const student_classes = require("../student/student_classes.model.js");
const StudentModel = require("../student/student.model.js");

class ClassController {
  router = Router();
  path = "/class";

  constructor() {
    this.#initRoutes();
  }

  #initRoutes() {
    this.router.get("/", this.#homeRoute);

    this.router.post("/create", this.#createClass);

    this.router.patch("/addStudent", this.#addStudent);
  }

  #homeRoute(req, res) {
    res.status(200).send("Class Controller");
  }

  async #addStudent(req, res) {
    try {
      await student_classes.create({
        ClassId: req.body.id,
        StudentRegNo: req.body.regNo,
      });
      const _class = await ClassModel.findOne({
        id: req.body.id,
        include: [{ model: StudentModel }],
      });
      res.status(200).send(_class);
    } catch (err) {
      res.status(403).send(err);
    }
  }

  async #createClass(req, res) {
    try {
      const _class = await ClassModel.create(req.body);
      res.status(201).send(_class);
    } catch (err) {
      res.status(403).send(err);
    }
  }
}

module.exports = ClassController;
