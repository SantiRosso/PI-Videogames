const { Router } = require("express");
const {
  getReviews,
  postReview,
  deleteReview,
  updateReview,
} = require("./controllers");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.send(await getReviews());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const { userId, title, comment, score } = req.body;
  try {
    await postReview(userId, title, comment, score);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await deleteReview(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/", async (req, res) => {
  const { id, title, comment, score } = req.body;
  try {
    await updateReview(id, title, comment, score);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
