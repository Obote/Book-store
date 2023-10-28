import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <h2>Samepage BookStore</h2>
      <div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
