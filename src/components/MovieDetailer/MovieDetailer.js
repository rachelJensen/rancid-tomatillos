import './MovieDetailer.css';
import { singleMovie } from '../../apiCalls'

const MovieDetailer = ({ movie }) => {
 
 
  return (
    <section>
      <img className='backdrop' src={movie.backdrop_path} alt={movie.title}/>
      <h2>{movie.title}</h2>
      <p className='release'>{movie.release_date}</p>
      <p className='overview'>{movie.overview}</p>
      <p className='rating'>{movie.average_rating}</p>
      <p className='budget'>{movie.budget}</p>
      <p className='genres'>Drama, Comedy, Whatever</p>
      <p className='runtime'>{movie.runtime}</p>
      <p className='tagline'>{movie.tagline}</p>
    </section>
  )
}

export default MovieDetailer;

