const express = require("express")
const router = express.Router()

const controller = require("../controllers/moviesControllers")

router.get("/", controller.allMovies)

router.get("/:id", controller.findMovie)

router.post("/create", controller.createMovie)

router.patch("/:id", controller.updateMovie)

router.delete("/:id", controller.deleteMovie)

module.exports = router
