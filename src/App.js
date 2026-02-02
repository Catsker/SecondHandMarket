import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CatalogPage from '@/pages/CatalogPage'
import NotFoundPage from "@/pages/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CatalogPage/>}/>
      <Route path="/catalog" element={<CatalogPage/>}/>
      <Route path="/catalog/:category/*" element={<CatalogPage/>} />
      <Route path="/*" element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
