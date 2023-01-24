require("dotenv").config();
const { Platform } = require("../../db.js");
const { APIKEY } = process.env;
const axios = require("axios");

const getPlatforms = async () => {
  try {
    let platformsApi = await axios.get(
      `https://api.rawg.io/api/platforms?key=${APIKEY}`
    );
    platformsApi = platformsApi.data.results;
    platformsApi = platformsApi?.map((e) => {
      return {
        name: e.name,
      };
    });
    platformsApi.forEach(async (e) => {
      await Platform.findOrCreate({
        where: {
          name: e.name,
        },
      });
    });
    let platformsDb = await Platform.findAll();
    return platformsDb;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getPlatforms };
