import React from 'react';
import { FaSearch, FaHeart } from 'react-icons/fa';
import { MdFavoriteBorder } from "react-icons/md";

import './Navbar.css';

export default function Navbar({ onSearchClick, onFavoritesClick }) {
  return (
    <nav className="navbar">
      <h3 className="nav-title">📚 Book Shop</h3>
      <div className="nav-left">
        <FaSearch className="nav-icon" size={22} onClick={onSearchClick} />
        <MdFavoriteBorder className="nav-icon" size={22} onClick={onFavoritesClick} />
      </div>
      
      
    </nav>
  );
}