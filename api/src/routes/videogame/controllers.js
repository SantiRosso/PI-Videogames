require("dotenv").config();
const { Genre, Videogame, Platform } = require("../../db.js");
const { APIKEY } = process.env;
const axios = require("axios");

const getById = async (id) => {
  try {
    let game = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${APIKEY}`
    );
    game = game.data;
    let gameOk = {
      id: game.id,
      name: game.name,
      genres: game.genres?.map((e) => e.name),
      platforms: game.platforms?.map((e) => e.platform.name),
      released: game.released,
      img: game.background_image,
      rating: game.rating,
      description: game.description_raw,
    };
    return gameOk;
  } catch (error) {
    throw new Error(error);
  }
};

const getGameByIdFromDb = async (id) => {
  try {
    let videogameDb = await Videogame.findOne({
      where: {
        id: id,
      },
      include: [Genre, Platform],
    });
    console.log(videogameDb);
    videogameDb.dataValues.genres = videogameDb.dataValues.genres.map(
      (e) => e.name
    );
    videogameDb.dataValues.platforms = videogameDb.dataValues.platforms.map(
      (e) => e.name
    );
    return videogameDb.dataValues;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteGame = async (id) => {
  await Videogame.destroy({
    where: {
      id,
    },
  });
};

const updateGame = async (
  id,
  name,
  description,
  released,
  rating,
  platforms,
  genres,
  img
) => {
  try {
    const nameGame = await Videogame.findOne({
      where: {
        name: name,
      },
    });

    if (nameGame) {
      return res.send({ message: "error" });
    }

    const videogame = await Videogame.findOne({
      where: {
        id,
      },
    });

    videogame.name = name;
    videogame.description = description;
    videogame.released = released;
    videogame.rating = rating;
    videogame.platforms = platforms;
    videogame.genres = genres;
    videogame.img = img;
    await videogame.save();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getById,
  getGameByIdFromDb,
  deleteGame,
  updateGame,
};
