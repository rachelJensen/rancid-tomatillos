import './MoviePoster.css';
import { Link } from 'react-router-dom'

const MoviePoster = ({ id, poster, title, findMovie }) => {
  return (
    <Link to={`movies/${id}`}>
      <article id={id}>
        <img className="poster" src={poster} alt={title} onClick={() => {findMovie(id)}}/>
      </article>
    </Link>
  );
};

export default MoviePoster;
