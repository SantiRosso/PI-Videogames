const { Router } = require("express");
const { getHome, getFilQuery /* getGamesDb */ } = require("./controllers");
const { Videogame, Genre } = require("../db.js");
const router = Router();

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

  if (name && description && released && rating && platforms && genres && img) {
    try {
      let juego = await Videogame.create({
        name,
        description,
        released,
        rating,
        platforms /* : platforms.split(" ") */,
        img,
      });

      let db = await Genre.findAll({
        where: {
          name: genres,
        },
      });

      await juego.addGenre(db);

      res.status(201);
    } catch (error) {
      res.status(400).send(error);
    }
  }
});

module.exports = router;
