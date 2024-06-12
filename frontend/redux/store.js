import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Auth/authSlice';
import productsSlice from './Product/productSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
