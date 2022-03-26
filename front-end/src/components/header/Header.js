import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="branding">SHOP IT</h1>
      </Link>

      <ul className="nav">
        <Link to="/">Home</Link>
        <li className="nav-item">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
