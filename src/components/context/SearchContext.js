import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();
export const useSearch = () => useContext(SearchContext);

export function SearchProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [lastQuery, setLastQuery] = useState({ title: "", author: "", genre: "" });

  return (
    <SearchContext.Provider value={{ books, setBooks, lastQuery, setLastQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
