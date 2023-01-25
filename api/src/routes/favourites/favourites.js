const { Router } = require("express");
const { getFavourites } = require("./controllers");
const {} = require("../../db.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { userId } = req.body;
    res.send(await getFavourites(userId, gameId));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
  } catch (error) {}
});

router.delete("/", async (req, res) => {
  try {
  } catch (error) {}
});
