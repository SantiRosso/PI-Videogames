const { Favourite /* User */ } = require("../../db.js");

const getFavourites = async (userId) => {
  try {
    const result = await Favourite.findAll({
      where: {
        userId: userId,
      },
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const postFavourite = async (userId, gameId) => {
  try {
    await Favourite.findOrCreate({
      where: {
        userId,
        gameId,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

const deleteFavourite = async (userId, gameId) => {
  try {
    await Favourite.destroy({
      where: {
        userId,
        gameId,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getFavourites, postFavourite, deleteFavourite };
