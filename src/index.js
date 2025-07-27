import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider} from './components/context/FavoritesContext';
import { SearchProvider } from "./components/context/SearchContext"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <FavoritesProvider>
    <SearchProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchProvider>
  </FavoritesProvider>
);


reportWebVitals();
