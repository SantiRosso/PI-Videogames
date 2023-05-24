require("dotenv").config();
const axios = require("axios");
const { Op } = require("sequelize");
const { APIKEY } = process.env;
const { Genre, Videogame, Platform } = require("../../db.js");

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
        img: e.background_image,
        // platforms: e.platforms?.map((e) => e.platform.name),
        // released: e.released,
        rating: e.rating,
        created: false,
      };
    });

    let videogamesDb = await Videogame.findAll({
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
        {
          model: Platform,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    videogamesDb = videogamesDb?.map((e) => {
      return {
        id: e.id,
        name: e.name,
        img: e.img,
        genres: e.genres?.map((e) => e.name),
        // platforms: e.platforms?.map((e) => e.name),
        // released: e.released,
        // rating: e.rating,
        // description: e.description,
        created: e.created,
      };
    });

    api = [...api, ...videogamesDb];

    return api;
  } catch (error) {
    throw new Error(error);
  }
};

const getFilQuery = async (name) => {
  try {
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
    }

    let db = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
        {
          model: Platform,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (db.length) {
      db = db.map((e) => {
        return {
          id: e.id,
          name: e.name,
          genres: e.genres?.map((e) => e.name),
          platforms: e.platforms?.map((e) => e.name),
          released: e.released,
          img: e.background_image,
          rating: e.rating,
          description: e.description,
        };
      });
    }

    let result = [...api, ...db];

    if (result.length) return result;
  } catch (error) {
    throw new Error(error);
  }
};

const createVideogame = async (
  name,
  description,
  released,
  rating,
  platforms,
  genres,
  img
) => {
  let [juego, boolean] = await Videogame.findOrCreate({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    defaults: {
      name,
      description,
      released,
      rating,
      img,
    },
  });

  if (!boolean) {
    throw new Error(error);
  }

  let genreDb = await Genre.findAll({
    where: {
      name: genres,
    },
  });

  let platformDb = await Platform.findAll({
    where: {
      name: platforms,
    },
  });

  juego.addGenre(genreDb);
  juego.addPlatform(platformDb);
};

module.exports = {
  getHome,
  getFilQuery,
  createVideogame,
};
