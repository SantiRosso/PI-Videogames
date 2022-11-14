const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genresRouter = require("./genresRouter.js");
const videogamesRouter = require("./videogamesRouter.js");
const videogameRouter = require("./videogameRouter.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);
router.use("/videogame", videogameRouter);

module.exports = router;
