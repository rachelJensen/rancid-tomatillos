import './MovieDetailer.css';

const fakeMovie = {"movie": {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }}

const MovieDetailer = () => {
  return (
    <section>
      <img className='backdrop' src={fakeMovie.movie.backdrop_path} alt={fakeMovie.movie.title}/>
      <h2>{fakeMovie.movie.title}</h2>
      <p className='release'>{fakeMovie.movie.release_date}</p>
      <p className='overview'>{fakeMovie.movie.overview}</p>
      <p className='rating'>{fakeMovie.movie.average_rating}</p>
      <p className='budget'>{fakeMovie.movie.budget}</p>
      <p className='genres'>Drama, Comedy, Whatever</p>
      <p className='runtime'>{fakeMovie.movie.runtime}</p>
      <p className='tagline'>{fakeMovie.movie.tagline}</p>
    </section>
  )
}

export default MovieDetailer;

