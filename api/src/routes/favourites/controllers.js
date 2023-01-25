const Favourite = require("../../models/Favourite");

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

module.exports = { getFavourites };
