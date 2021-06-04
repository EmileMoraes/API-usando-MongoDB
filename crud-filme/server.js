const express = require("express")
const app = express()

//Conectar o mongo com o mongoose
const db = require("./src/data/database")
db.connect()

app.use(express.json())

const moviesRouter = require("./src/routes/filmes.routes")
app.use("/movies", moviesRouter)

const PORT = 3333
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))