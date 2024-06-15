import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../src/utils/axiosInstance';

const initialCartState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const saveStateToLocalStorage = (state) => {
  localStorage.setItem('cartItems', JSON.stringify(state.items));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity, brand_id, brandName } = action.payload;

      const existingItem = state.items.find(
        (item) => item.product_id === product.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...product, quantity, brand_id });
      }

      if (!state.brands[brand_id]) {
        state.brands[brand_id] = { brandName, items: [] };
      }

      state.brands[brand_id].items.push({ ...product, quantity });
      saveStateToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const { product_id, brand_id } = action.payload;
      state.items = state.items.filter(
        (item) => item.product_id !== product_id
      );
      state.brands[brand_id].items = state.brands[brand_id].items.filter(
        (item) => item.product_id !== product_id
      );

      if (state.brands[brand_id].items.length === 0) {
        delete state.brands[brand_id];
      }
      saveStateToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.brands = {};
      saveStateToLocalStorage(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
      state.brands = action.payload.reduce((acc, item) => {
        if (!acc[item.brand_id]) {
          acc[item.brand_id] = { brandName: item.brandName, items: [] };
        }
        acc[item.brand_id].items.push(item);
        return acc;
      }, {});
      saveStateToLocalStorage(state);
    });
  },
});

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { getState }) => {
    const state = getState();
    const user = state.auth;
    const session_id = localStorage.getItem('session_id');
    const headers = {};

    if (user.token) {
      headers['Authorization'] = user.token;
    } else {
      headers['Session-ID'] = session_id;
    }

    const response = await axiosInstance.get('/api/cart', { headers });
    return response.data.items;
  }
);

// Update cart in backend
export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async (_, { getState }) => {
    const state = getState();
    const items = state.cart;
    const user = state.auth;
    const session_id = localStorage.getItem('session_id');
    const headers = {};

    if (user.token) {
      headers['Authorization'] = user.token;
    } else {
      headers['Session-ID'] = session_id;
    }

    await axiosInstance.post('/api/cart/update', { items }, { headers });
  }
);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice;
