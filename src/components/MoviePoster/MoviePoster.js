import './MoviePoster.css';

const MoviePoster = ({ id, poster, title }) => {
  return (
    <article id={id}>
      <img className="poster" src={poster} alt={title} />
    </article>
  );
};

export default MoviePoster;
