import './Error404.css';
import {Link} from 'react-router-dom';

const Error404 = () => {
  return (
      <Link to="*" >
        <section className="error">
          <div className="error-message">
            <h2>404</h2>
            <h3>Page Not Found</h3>
          </div>
        </section>
      </Link>
  )
}

export default Error404;