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
      description: game.description,
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
      include: Genre,
    });
    console.log(videogameDb);
    videogameDb.dataValues.genres = videogameDb.dataValues.genres.map(
      (e) => e.name
    );
    return videogameDb.dataValues;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteGame = () => {};

module.exports = {
  getById,
  getGameByIdFromDb,
  deleteGame,
};
