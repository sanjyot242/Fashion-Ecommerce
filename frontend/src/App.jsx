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
import { loginActions } from '../redux/Auth/authSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ErrorPage from './pages/ErrorPage';
import CheckoutPage from './components/CheckoutPage';
import PaymentSuccessfulPage from './pages/PaymentSuccessfulPage';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.checkToken());
  }, [dispatch]);

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
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route
          path='/paymentSuccessful/:paymentId/:orderId'
          element={<PaymentSuccessfulPage />}
        />
        <Route path='/NotFound' element={<ErrorPage />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
