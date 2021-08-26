import './MoviePoster.css';

const MoviePoster = ({ id, poster, title, findMovie }) => {
  return (
    <article id={id}>
      <img className="poster" src={poster} alt={title} onClick={() => {findMovie(id)}}/>
    </article>
  );
};

export default MoviePoster;
