const { Router } = require("express");
const { getComments, postComment, updateComment } = require("./controllers.js");
const router = Router();

router.get("/", async (req, res) => {
  const { gameId } = req.body;
  try {
    res.send(await getComments(gameId));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const { gameId, userId, title, comment, score } = req.body;
  try {
    await postComment(gameId, userId, title, comment, score);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/", async (req, res) => {
  const { id, title, comment, score } = req.body;
  try {
    await updateComment(id, title, comment, score);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
