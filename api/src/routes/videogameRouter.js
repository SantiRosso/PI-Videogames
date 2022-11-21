const { Router } = require("express");
const { getById, getGameByIdFromDb } = require("./controllers");
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

module.exports = router;
