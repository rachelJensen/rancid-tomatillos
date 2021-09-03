import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import Hero from '../Hero/Hero';

const MoviesContainer = ({ movies, findMovie}) => {
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
        findMovie={findMovie}
      />
    );
  });

  return (
    <div className="background">
      {/* <Hero /> */}
      <section className="container">
        {movieCards}
      </section>
    </div>
  )
};

export default MoviesContainer;
