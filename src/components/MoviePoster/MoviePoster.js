import './MoviePoster.css';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const MoviePoster = ({ id, poster, title }) => {
  return (
    <Link to={`movies/${id}`}>
      <article id={id}>
        <img className="poster" src={poster} alt={title} />
      </article>
    </Link>
  );
};

export default MoviePoster;

MoviePoster.propTypes = { 
  id: PropTypes.number,
  poster: PropTypes.string,
  title: PropTypes.string
}