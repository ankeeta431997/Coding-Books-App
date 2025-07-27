import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import { fetchBooks } from '../api';

import { useSearch } from "../components/context/SearchContext";

export default function SearchPage() {
  const { books, setBooks, lastQuery, setLastQuery } = useSearch();

  const handleSearch = async (title, author, genre) => {
    setLastQuery({ title, author, genre });
    const data = await fetchBooks(title, author, genre);
    setBooks(data.items || []);
  };

  return (
    <>
      <SearchForm
        onSearch={handleSearch}
        defaultValues={lastQuery}
      />
      <BookList books={books} />
    </>
  );
}