const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genresRouter = require("./genres/genres.js");
const platformsRouter = require("./platforms/platforms.js");
const videogamesRouter = require("./videogames/videogames.js");
const videogameRouter = require("./videogame/videogame.js");
const favouritesRouter = require("./favourites/favourites.js");
const reviewsRouter = require("./reviews/reviews.js");
const commentsRouter = require("./comments/comments.js");
const usersRouter = require("./users/users.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);
router.use("/videogame", videogameRouter);
router.use("/platforms", platformsRouter);
router.use("/favourites", favouritesRouter);
router.use("/reviews", reviewsRouter);
router.use("/comments", commentsRouter);
router.use("/users", usersRouter);

module.exports = router;
