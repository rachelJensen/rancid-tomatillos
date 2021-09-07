import './Error404.css';
import {Link} from 'react-router-dom';

const Error404 = ({ errorType }) => { 
  let line1 = (errorType === 'error 404') ? '404' : 'Something went wrong';
  let line2 = (errorType === 'error 404') ? 'Page Not Found' : 'Please try again later'
  
  return (
      <Link to="*" >
        <section className="error">
          <div className="error-message">
            <h2 className='neon-error'>{line1}</h2>
            <h3 className='neon-error'>{line2}</h3>
          </div>
        </section>
      </Link>
  )
}

export default Error404;