const { Router } = require("express");
const { getGenres } = require("./controllers");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let resutl = await getGenres();
    res.send(resutl);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
