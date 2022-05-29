const { Router } = require("express");

const BranchModel = require("./branch.model.js");

class BranchController {
  router = Router();
  path = "/branch";

  constructor() {
    this.#initRoutes();
  }

  #initRoutes() {
    this.router.get("/", this.#homeRoute);

    this.router.post("/create", this.#createBranch);
  }

  #homeRoute(req, res) {
    res.status(200).send("Branch Controller!");
  }

  async #createBranch(req, res) {
    try {
      const branch = await BranchModel.create(req.body);
      res.status(201).send(branch);
    } catch (err) {
      res.status(403).send(err);
    }
  }
}

module.exports = BranchController;
