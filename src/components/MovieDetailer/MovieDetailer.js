import './MovieDetailer.css';

const MovieDetailer = ({ movieID }) => {
  return (
    <section>
      <img className='backdrop' src={movieID.backdrop_path} alt={movieID.title}/>
      <h2>{movieID.title}</h2>
      <p className='release'>{movieID.release_date}</p>
      <p className='overview'>{movieID.overview}</p>
      <p className='rating'>{movieID.average_rating}</p>
      <p className='budget'>{movieID.budget}</p>
      <p className='genres'>Drama, Comedy, Whatever</p>
      <p className='runtime'>{movieID.runtime}</p>
      <p className='tagline'>{movieID.tagline}</p>
    </section>
  )
}

export default MovieDetailer;

