import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandHighlights from './components/BrandHighlights';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Products from './components/Products';
import './App.css';

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
        <Route path='/login' element={<div>Login</div>} />
        <Route path='/signup' element={<div>Signup</div>} />
        <Route path='/cart' element={<div>Cart</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
