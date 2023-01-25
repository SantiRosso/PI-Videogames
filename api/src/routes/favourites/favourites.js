const { Router } = require("express");
const {
  getFavourites,
  postFavourite,
  deleteFavourite,
} = require("./controllers");
const {} = require("../../db.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { userId } = req.body;
    res.send(await getFavourites(userId));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { userId, gameId } = req.body;
    await postFavourite(userId, gameId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/", async (req, res) => {
  try {
    const { userId, gameId } = req.body;
    await deleteFavourite(userId, gameId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
