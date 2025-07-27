import React from 'react';
import { useFavorites } from '../components/context/FavoritesContext';
import BookList from '../components/BookList';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <>
      <h2>My Favorite Books</h2>
      {favorites.length ? <BookList books={favorites} /> : <p>No favorites yet!</p>}
    </>
  );
}