const { Cream } = require("../models");
module.exports = {
  // get all user
  async index(req, res) {
    try {
      const creams = await Cream.findAll();
      res.send(creams);
    } catch (err) {
      res.status(500).send({
        error: "The Cream information was incorrect",
      });
    }
  },
  // create user
  async create(req, res) {
    try {
      const cream = await Cream.create(req.body);
      res.send(cream.toJSON());
    } catch (err) {
      res.status(500).send({
        error: "Create Cream incorrect",
      });
    }
  },
  // edit user, suspend, active
  async put(req, res) {
    try {
      await Cream.update(req.body, {
        where: {
          id: req.params.creamId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Update Cream incorrect",
      });
    }
  },
  // delete user
  async remove(req, res) {
    try {
      const cream = await Cream.findOne({
        where: {
          id: req.params.creamId,
        },
      });

      if (!cream) {
        return res.status(403).send({
          error: "The Cream information was incorrect",
        });
      }

      await cream.destroy();
      res.send(cream);
    } catch (err) {
      res.status(500).send({
        error: "The Cream information was incorrect",
      });
    }
  },

  // get user by id
  async show(req, res) {
    try {
      const cream = await Cream.findByPk(req.params.creamId);
      res.send(cream);
    } catch (err) {}
  },
};
