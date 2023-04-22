import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
  return (
    <nav>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React Logo"></img>
      <h1><a href="/">BEST MOVIES!</a></h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><Link to={`/blogfavorites`}>Favorites</Link></li>
        <li><a href="/">Random</a></li>
      </ul>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ic_account_circle_48px.svg/1200px-Ic_account_circle_48px.svg.png" alt="User Icon"></img>
    </nav>
  );
}

export default Navbar;