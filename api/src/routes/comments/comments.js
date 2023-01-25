const { Router } = require("express");
const { getComments } = require("./controllers.js");
const router = Router();

router.get("/", async (req, res) => {
  const { gameId } = req.body;
  try {
    res.send(await getComments(gameId));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
