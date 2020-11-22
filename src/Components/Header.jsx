import { useRef } from 'react';
import logo from '../Pictures/logo.png';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

function toggleDropdown(dropdown) {
  dropdown.classList.toggle('dropdown-active');
}

function Header() {
  const dropdown = useRef(null);

  return (
    <div className="header-wrapper">
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <ul className="header__links" ref={dropdown}>
          <li className="header__link">
            <Link to="#">Početna</Link>
          </li>
          <li className="header__link">
            <Link to="#">Desktopovi</Link>
          </li>
          <li className="header__link">
            <Link to="#">Laptopovi</Link>
          </li>
          <li className="header__link">
            <Link to="#">Telefoni</Link>
          </li>
          <li className="header__link">
            <Link to="#">Kontakt</Link>
          </li>
        </ul>
        <div
          className="header__burger"
          onClick={() => toggleDropdown(dropdown.current)}
          onTouchEnd={e => {
            e.preventDefault();
            toggleDropdown(dropdown.current);
          }}
        >
          <div className="header__burger-line"></div>
          <div className="header__burger-line"></div>
          <div className="header__burger-line"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
