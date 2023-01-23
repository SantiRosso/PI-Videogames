require("dotenv").config();
const { Genre } = require("../../db.js");
const { APIKEY } = process.env;
const axios = require("axios");

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
    throw new Error(error);
  }
};

module.exports = {
  getGenres,
};
