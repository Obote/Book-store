import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navigation-main">
      <h2 className="main-heading">Book</h2>
      <div className="nav-list-div">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
