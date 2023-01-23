const { Router } = require("express");
const {
  getHome,
  getFilQuery /* getGamesDb */,
  createVideogame,
} = require("./controllers");
const { Videogame, Genre } = require("../../db.js");
const router = Router();
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const resp = await getFilQuery(name);
      res.send(resp);
    } else {
      const result = await getHome();
      res.send(result);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  const { name, description, released, rating, platforms, genres, img } =
    req.body;

  try {
    await createVideogame(
      name,
      description,
      released,
      rating,
      platforms,
      genres,
      img
    );
    res.status(201).send("ok");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
