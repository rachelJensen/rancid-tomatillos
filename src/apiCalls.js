export const allMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/moes')
  // .then(res => res.json())
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      throw new Error('TEST')
    }
  })
  .then(data => data)
}

// export const allMovies = await

export const singleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(res => res.json())
    .then(data => data)
  
}

export const singleMoviesVideos = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
  .then(res => res.json())
  .then(data => data)
}