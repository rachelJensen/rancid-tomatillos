import './MovieDetailer.css';

const MovieDetailer = ({ movieID }) => {
  return (
    <section>
      <img className='backdrop' src={movieID.backdrop_path} alt={fmovieID.title}/>
      <h2>{fmovieID.title}</h2>
      <p className='release'>{fmovieID.release_date}</p>
      <p className='overview'>{fmovieID.overview}</p>
      <p className='rating'>{fmovieID.average_rating}</p>
      <p className='budget'>{fmovieID.budget}</p>
      <p className='genres'>Drama, Comedy, Whatever</p>
      <p className='runtime'>{fmovieID.runtime}</p>
      <p className='tagline'>{fmovieID.tagline}</p>
    </section>
  )
}

export default MovieDetailer;

