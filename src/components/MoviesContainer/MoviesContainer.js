import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

const MoviesContainer = ({ movies }) => {
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
      />
    );
  });

  return <section className="container">{movieCards}</section>;
};

export default MoviesContainer;