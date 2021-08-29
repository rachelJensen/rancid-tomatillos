import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to='/'>
      <header >
        <button className="homeBtn" ><h1>Rancid Tomatillos</h1></button>
      </header>
    </Link>
  );
};

export default Header;
