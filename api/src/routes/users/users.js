const { Router } = require("express");
const { getUsers } = require("./controllers.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.send(await getUsers());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
