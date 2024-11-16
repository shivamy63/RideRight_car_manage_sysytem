import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import { SearchProvider } from './context/search';
import { CartProvider } from './context/cart';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>
);

// Measure performance
reportWebVitals(console.log); // or send to an analytics endpoint