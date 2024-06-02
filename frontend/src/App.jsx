import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandHighlights from './components/BrandHighlights';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <BrandHighlights />
      <Footer />
    </>
  );
}

export default App;
