import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            App
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            Blog List
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog/post">
            Blog Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
