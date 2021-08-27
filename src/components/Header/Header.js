import './Header.css';

const Header = ({ reload }) => {

  return (

      <header >
        <button className="homeBtn" onClick={reload }><h1>Rancid Tomatillos</h1></button>
      </header>
  );
};

export default Header;
