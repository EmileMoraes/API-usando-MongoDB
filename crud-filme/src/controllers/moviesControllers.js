const Movie = require("../models/filme")

const allMovies = async (req, res)=>{
    const movies = await Movie.find() // listando todos os filmes 
    res.status(200).json(movies)
}

const findMovie = async (req, res)=>{
    try {
        const movieFind = await Movie.findById(req.params.id)
        if(Movie == null){
            return res.status(404).json({message: "Filme não encontrado"})
        } 
        res.status(200).json(movieFind)
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

const createMovie = async (req, res)=>{
    const movie = new Movie({
        title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        type: req.body.type,
        available_on: req.body.available_on,
        created_at: req.body.created_at
    })

    try {
        const newMovie = await movie.save()
        res.status(201).json({message: "Filme criado com sucesso!", newMovie})
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

const updateMovie = async (req, res)=>{
    try {
        const movie = await Movie.findById(req.params.id)
        if(Movie == null){
            return res.status(404).json({message: "Filme não encontrado"})
        }

        if (req.body.year != null){
            movie.year = req.body.year
        }
        if (req.body.title != null){
            movie.title = req.body.title
        }
        if (req.body.description != null){
            movie.description = req.body.description
        }
        if (req.body.type != null){
            movie.type = req.body.type
        }
        if (req.body.available_on != null){
            movie.available_on = req.body.available_on
        }

        const updateMovie = await movie.save()
        res.status(200).json(updateMovie)
    }catch (err) {
        res.status(500).json({message: err.message})
    }

}

const deleteMovie = async (req, res)=>{
    try{
        const movie = await Movie.findById(req.params.id)
        if(Movie == null){
            return res.status(404).json({message: "Filme não encontrado"})
        }
        await movie.remove()
        res.json({message: "Filme deletado com sucesso!"})

    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = {
    allMovies,
    findMovie,
    createMovie,
    updateMovie,
    deleteMovie
}