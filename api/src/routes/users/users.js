const { Router } = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("./controllers.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.send(await getUsers());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const {
    name,
    email,
    password,
    image,
    country,
    age,
    sex,
    favGenre,
    favPlatform,
  } = req.body;
  try {
    await createUser(
      name,
      email,
      password,
      image,
      country,
      age,
      sex,
      favGenre,
      favPlatform
    );
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/", async (req, res) => {
  const {
    id,
    name,
    email,
    password,
    image,
    country,
    age,
    sex,
    favGenre,
    favPlatform,
  } = req.body;
  try {
    console.log(req.body);
    await updateUser(
      id,
      name,
      email,
      password,
      image,
      country,
      age,
      sex,
      favGenre,
      favPlatform
    );
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await deleteUser(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
