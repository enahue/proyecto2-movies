const moviesDB = [
  {
    id: 1,
    "title": "The Gentlemen",
    "description": "TAn American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    "year": 2019,
    "director": "Guy Ritchie"
  },
  {
    id: 2,
    "title": "Papillon",
    "description": "Wrongfully convicted for murder, Henri Charriere forms an unlikely relationship with fellow inmate and quirky convicted counterfeiter, Louis Dega, in an attempt to escape from the notorious penal colony on Devil's Island.",
    "year": 2017,
    "director": "Michael Noer"
  },
  {
    id: 3,
    "title": "Triple Frontier",
    "description": "Loyalties are tested when five friends and former special forces operatives reunite to take down a South American drug lord, unleashing a chain of unintended consequences.",
    "year": 2019,
    "director": "J.C. Chandor"
  }
]

let movieId = 4

const findAllMovies = async () => {
  return moviesDB
}

const findMovieById = async (id) => {
  const movie = moviesDB.find(movieItem => movieItem.id === id)
  return movie
}

const createMovie = async (movieObj) => {
  const newMovie = {
    id: movieId++,
    "title": movieObj.title || 'Untitled',
    "description": movieObj.description || null,
    "year": movieObj.year || 1980,
    "director": movieObj.director || 'Anonymous'
  }
  moviesDB.push(newMovie)
  return newMovie
}

const updateMovie = async (movieId, movieObj) => {
  const updatedMovie = {
    "id": movieId,
    "title": movieObj.title || 'Untitled',
    "description": movieObj.description || null,
    "year": movieObj.year || 1980,
    "director": movieObj.director || 'Anonymous'
  }

  for (let i =  0; i < moviesDB.length; i++) {
    if(moviesDB[i].id === movieId){
      moviesDB.splice(i, 1, updatedMovie)
    }
  }

  return moviesDB
}

const removeMovie = async (movieId) => {
  let removed = false

    for (let i =  0; i < moviesDB.length; i++) {
      if(moviesDB[i].id === movieId){
        moviesDB.splice(i, 1)
        removed = true
      }
    }

  const data = {removed, moviesDB}
  
  return data
}

module.exports = {
  findAllMovies,
  findMovieById,
  createMovie,
  updateMovie,
  removeMovie
}