const { Router } = require("express");
const { getPlatforms } = require("./controllers");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let resutl = await getPlatforms();
    res.send(resutl);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
