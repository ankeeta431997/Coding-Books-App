const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const fetchBooks = async (title, author, genre) => {
  let query = '';
  if (title) query += `intitle:${title}+`;
  if (author) query += `inauthor:${author}+`;
  if (genre) query += `${genre}+`;

  const res = await fetch(`${BASE_URL}${query}&maxResults=20`);
  return await res.json();
};