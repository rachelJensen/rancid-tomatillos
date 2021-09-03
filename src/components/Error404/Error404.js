import './Error404.css';
import {Link} from 'react-router-dom';

const Error404 = () => {
  return (
      <Link to="*" >
        <h2>Nope. Nothing here</h2>
      </Link>
  )
}

export default Error404;