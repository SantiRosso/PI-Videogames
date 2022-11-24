const { Router } = require("express");
const { getHome, getFilQuery /* getGamesDb */ } = require("./controllers");
const { Videogame, Genre } = require("../db.js");
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

  if (name && description && released && rating && platforms && genres && img) {
    try {
      // const asdasd = await Videogame.findOne({
      //   where: {
      //     name: {
      //       [Op.iLike]: `%${name}%`,
      //     },
      //   },
      // });
      // console.log(asdasd);
      // if (asdasd) {
      //   if (asdasd.dataValues?.name === name) {
      //     // console.log("entro al if");
      //     throw new Error("error");
      //   }
      // }

      let juego = await Videogame.create({
        name,
        description,
        released,
        rating,
        platforms,
        img,
      });

      let genreDb = await Genre.findAll({
        where: {
          name: genres,
        },
      });

      await juego.addGenre(genreDb);

      res.status(201);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
});

module.exports = router;
