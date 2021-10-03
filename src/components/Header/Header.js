import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header >
      <Link to='/rancid-tomatillos/movies' className="link">
       <h1>Rancid Tomatillos</h1>
      </Link>
    </header>
  );
};

export default Header;
