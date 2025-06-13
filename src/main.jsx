import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './pages/ProductList.jsx'
import ProductPage from './pages/ProductPage.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
