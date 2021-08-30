export const allMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  // .then(res => res.json())
  .then(res => {
    if(res.ok) {
      return res.json()
    } else if (res.status >= 500){
      throw new Error('500 error')
    } else {
      throw new Error('400 error')
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