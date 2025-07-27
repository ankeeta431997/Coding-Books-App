import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from "../components/context/FavoritesContext";
import { FaHeart } from "react-icons/fa";
import "../styles/BookDetails.css";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const isFav = favorites.find((fav) => fav.id === book.id);

  const handleFavorite = () => {
    if (isFav) removeFavorite(book.id);
    else addFavorite(book);
  };

  return (
    <div className="book-details-container">
      <div className="book-image-section">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || "/placeholder.png"}
          alt={book.volumeInfo.title}
        />
      </div>

      <div className="book-info-section">
        <h1>{book.volumeInfo.title}</h1>
        <p className="author">By {book.volumeInfo.authors?.join(", ")}</p>
        <p className="description">{book.volumeInfo.description}</p>

        <div className="book-actions">
          <button className="fav-btn" onClick={handleFavorite}>
            <FaHeart
              size={20}
              style={{ color: isFav ? "red" : "gray", marginRight: "8px" }}
            />
            {isFav ? "Remove Favorite" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}