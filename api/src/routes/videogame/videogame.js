const { Router } = require("express");
const {
  getById,
  getGameByIdFromDb,
  deleteGame,
  updateGame,
} = require("./controllers");
const router = Router();

router.get("/:idVideogame", async (req, res) => {
  const { idVideogame } = req.params;

  try {
    if (idVideogame.includes("-")) {
      const resultDb = await getGameByIdFromDb(idVideogame);
      return res.send(resultDb);
    } else {
      const result = await getById(idVideogame);
      return res.send(result);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteGame(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, released, rating, platforms, genres, img } =
    req.body;
  try {
    await updateGame(
      id,
      name,
      description,
      released,
      rating,
      platforms,
      genres,
      img
    );
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
