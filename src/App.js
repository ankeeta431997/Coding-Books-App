import React, { Suspense, lazy ,useEffect} from 'react';
import { Routes, Route,useNavigate,useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';


const BookDetails = lazy(() => import("./pages/BookDetails"));

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("lastPath", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const lastPath = localStorage.getItem("lastPath");
    if (lastPath && lastPath !== location.pathname) {
      navigate(lastPath, { replace: true });
    }
  }, []);

  return (
    <>
      <Navbar
        onSearchClick={() => navigate("/")}
        onFavoritesClick={() => navigate("/favorites")}
      />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </Suspense>
    </>
  );
}