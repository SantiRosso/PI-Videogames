require("dotenv").config();
const axios = require("axios");
const { APIKEY } = process.env;
const { Genre, Videogame } = require("../db.js");

const getHome = async () => {
  try {
    let urls = [];
    for (let i = 1; i <= 5; i++) {
      urls = [...urls, `https://api.rawg.io/api/games?key=${APIKEY}&page=${i}`];
    }
    let api = urls.map((e) => axios.get(e));
    api = await Promise.all(api);
    api = api?.map((e) => e.data.results).flat();
    api = api?.map((e) => {
      return {
        id: e.id,
        name: e.name,
        genres: e.genres?.map((e) => e.name),
        platforms: e.platforms?.map((e) => e.platform.name),
        released: e.released,
        img: e.background_image,
        rating: e.rating,
      };
    });

    let videogamesDb = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    videogamesDb = videogamesDb?.map((e) => {
      return {
        id: e.id,
        name: e.name,
        platforms: e.platforms,
        released: e.released,
        img: e.img,
        rating: e.rating,
        description: e.description,
        genres: e.genres?.map((e) => e.name),
        created: e.created,
      };
    });

    api = [...api, ...videogamesDb];

    return api;
  } catch (error) {
    throw new Error("Cannot get videogames.");
  }
};

const getFilQuery = async (name) => {
  let api = await axios.get(
    `https://api.rawg.io/api/games?search=${name}&key=${APIKEY}`
  );
  api = api.data.results;
  if (api.length) {
    api = api.splice(0, 15);
    api = api?.map((e) => {
      return {
        id: e.id,
        name: e.name,
        genres: e.genres?.map((e) => e.name),
        platforms: e.platforms?.map((e) => e.platform.name),
        released: e.released,
        img: e.background_image,
        rating: e.rating,
        description: e.description,
      };
    });
  } else {
    throw new Error("Game not found.");
  }
  return api;
};

const getById = async (id) => {
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
    description: game.description,
  };
  return gameOk;
};

const getGameByIdFromDb = async (id) => {
  let videogameDb = await Videogame.findOne({
    where: {
      id: id,
    },
    include: Genre,
  });
  console.log(videogameDb);
  videogameDb.dataValues.genres = videogameDb.dataValues.genres.map(
    (e) => e.name
  );
  return videogameDb.dataValues;
};

const getGenres = async () => {
  try {
    let genresApi = await axios.get(
      `https://api.rawg.io/api/genres?key=${APIKEY}`
    );
    genresApi = genresApi.data.results;
    genresApi = genresApi?.map((e) => {
      return {
        name: e.name,
      };
    });
    genresApi.forEach(async (e) => {
      await Genre.findOrCreate({
        where: {
          name: e.name,
        },
      });
    });
    let genresDb = await Genre.findAll();
    return genresDb;
  } catch (error) {
    throw new Error("Cannot get genres.");
  }
};

module.exports = {
  getHome,
  getFilQuery,
  getById,
  getGameByIdFromDb,
  getGenres,
};
