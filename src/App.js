import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CatalogPage from '@/pages/CatalogPage';
import CartPage from '@/pages/CartPage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProtectedRoute from '@/pages/ProtectedRoute';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <CatalogPage/>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage/>}/>

      <Route
        path="/catalog"
        element={
          <ProtectedRoute>
            <CatalogPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/catalog/:category/*"
        element={
          <ProtectedRoute>
            <CatalogPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage/>
          </ProtectedRoute>
        }
      />

      <Route path="/*" element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
