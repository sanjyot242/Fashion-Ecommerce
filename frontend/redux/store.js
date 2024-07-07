import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Auth/authSlice';
import productsSlice from './Product/productSlice';
import cartSlice from './Cart/cartSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
