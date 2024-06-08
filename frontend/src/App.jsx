import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandHighlights from './components/BrandHighlights';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Products from './components/Products';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <FeaturedProducts />
              <BrandHighlights />
            </>
          }
        />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Registration />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/productDetail' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
