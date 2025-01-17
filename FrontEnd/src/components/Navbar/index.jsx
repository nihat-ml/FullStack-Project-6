import React from 'react';

import { Link } from 'react-router-dom';
import { MdFavorite } from "react-icons/md"; 

function Navbar() {
  return (
    <div className="hero">

      <div className="navbar">
        <div className="logo">Furnish</div>
        <div className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/addpage">Add Customers</Link></li>
          <li><Link to="/collection">Collection</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </div>
        <div className="favorites">
          <Link to="/favorites"><MdFavorite size={24} /></Link>
        </div>
      </div>

   
      <div className="content">
        <div className="text-section">
          <h1>
            Best Design of <span>Furniture Collections</span>
          </h1>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <button className="discover-btn">Discover</button>
        </div>
        <div className="image-section">
          <img src="https://preview.colorlib.com/theme/furnish/images/bg_2.jpg.webp" alt="Furniture" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
