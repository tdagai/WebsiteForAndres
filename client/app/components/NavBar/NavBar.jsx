import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ whereAmI }) => {
  return (
    <nav id='navbar-container' >
      <ul id='navbar-list' >
        <Link to="/contact" className='navbar-link-style' >
          <li className='navbar-item' >Contact</li>
        </Link>
        <Link to="/my-work" className='navbar-link-style' >
          <li className='navbar-item' >My Work</li>
        </Link>
        <Link to="/" className='navbar-link-style' >
          <li className='navbar-item' >Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;