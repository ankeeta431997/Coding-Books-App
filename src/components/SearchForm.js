import React, { useState } from 'react';
import '../styles/SearchForm.css';
export default function SearchForm({ onSearch, defaultValues = {} }) {
  const [title, setTitle] = useState(defaultValues.title || "");
  const [author, setAuthor] = useState(defaultValues.author || "");
  const [genre, setGenre] = useState(defaultValues.genre || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !author && !genre) return alert("Enter at least one field");
    onSearch(title, author, genre);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
      <button type="submit">Search</button>
    </form>
  );
}