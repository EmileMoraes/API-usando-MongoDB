# API-usando-MongoDB

*Entregável da 13 semana {Reprograma}
*API de filmes usando o banco de dados MongoDB

## Rotas 

[GET] "/" allMovies que retorna todos os filmes

[GET] "/:id" findMovie que retorna um filme especifico

[POST] "/create" createPost cria um filme

[PATCH] "/:id" updateMovie atualiza partes únicas ou todas do filme

[DELETE] "/:id" deleteMovie deleta um filme

### Objeto Mongoose - Schema
* title
  - String
  - required
* year
  - Number
  - required
* description
  - String
  - required
* type
  - String
  - required
* available_on
  - String
  - required
* created_at
  - Date
  - required
  - default


### Modelo dos dados em JSON

```json
    {
        "created_at": "Data",
        "title": "String",
        "year": Number,
        "description": "String",
        "type": " String",
        "available_on": "String",
    }
