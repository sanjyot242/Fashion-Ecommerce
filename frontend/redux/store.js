import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Auth/authSlice';

import cartSlice from './Cart/cartSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
