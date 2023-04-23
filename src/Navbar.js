import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
  return (
    <div class="topnav">
      <a><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="Company Logo"></img></a>
      <a><Link to={`/`}>BEST MOVIES!</Link></a>
      <div class="topnav-right">
        <a><Link to={`/`}>TOP100</Link></a>
        <a><Link to={`/blogfavorites`}>Favorites</Link></a>
        <a><Link to={`/blograndom`}>Random</Link></a>
        <img src="https://static-00.iconduck.com/assets.00/account-settings-icon-2048x1772-s24p7grg.png" alt="Account Icon"></img>
      </div>
    </div>

  )
}

export default Navbar;