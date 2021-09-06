import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import Error404 from '../Error404/Error404';
import PropTypes from 'prop-types';

const MoviesContainer = ({ movies, loadingError}) => {
  const movieCards = movies.map((movie) => {
    return (
      <MoviePoster
        id={movie.id}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating}
        release={movie.release_date}
        key={movie.id}
        // findMovie={findMovie}
      />
    );
  });



  return (
    !loadingError ?
    <div className="background">
      <section className="container">
        {movieCards}
      </section>
    </div>
    :
    <Error404 />
  )
};

export default MoviesContainer;

MoviesContainer.propTypes = { 
  movies: PropTypes.array,
  loadingError: PropTypes.string
}