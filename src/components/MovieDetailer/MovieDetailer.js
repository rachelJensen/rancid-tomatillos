import './MovieDetailer.css';
import { useEffect } from 'react';
import { formatMovieDetails } from '../../Utils';

const MovieDetailer = ({ formatData, movie, hanldeSingleMovie, location, videos }) => {
  
  // console.log(videos.videos)
  
  useEffect(() => {
    // formatData()
    hanldeSingleMovie(location)
  }, [])

// formatMovieDetails(movie)
  // movie = formatMovieDetails(movie)
  // let  test = formatMovieDetails(movie)

  // console.log(test, ' :test variable moviedetailer');
  return (
    <section className='movie-info'>
      <img className='backdrop' src={movie.backdrop_path} alt={movie.title}/>
      <div className='details-box'>
        <h2>{movie.title}</h2>
        <p className='tagline'>{movie.tagline}</p>
        <p className='genres'>Drama, Comedy, Whatever</p>
        <p className='release'>{movie.release_date}</p>
        <p className='overview'>{movie.overview}</p>
        <p className='rating'>{movie.average_rating}</p>
        <p className='budget'>{movie.budget}</p>
        <p className='runtime'>Runtime: {movie.runtime} min</p>
      </div> 
    </section>
  )
}

export default MovieDetailer;