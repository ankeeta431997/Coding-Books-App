import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../components/context/FavoritesContext';
import { FaHeart } from 'react-icons/fa';

import '../styles/BookCard.css';

export default function BookCard({ book }) {
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const isFav = favorites.find((fav) => fav.id === book.id);

  const handleFavoriteClick = () => {
    if (isFav) removeFavorite(book.id);
    else addFavorite(book);
  };

  return (
    <div className="book-card">
    <div className="book-image-container">
      <img
        src={book.volumeInfo.imageLinks?.thumbnail || "/placeholder.png"}
        alt={book.volumeInfo.title}
        className="book-image"
      />
    </div>
      <div className="book-info">
       <h3 className="book-title">{book.volumeInfo.title}</h3>
         <p className="book-author">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
      </div>

      <div className="book-actions">
        <Link to={`/book/${book.id}`} className="details-btn">
          Details
        </Link>

        <button
          className={`fav-btn ${isFav ? 'active' : ''}`}
          onClick={handleFavoriteClick}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
}