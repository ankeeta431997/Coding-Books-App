import React from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';
export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}