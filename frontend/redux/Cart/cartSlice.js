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
      const { product, quantity, brand_id } = action.payload;
      console.log(product);

      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        console.log('I have an existing item');
        existingItem.quantity++;
      } else {
        console.log('Creating new item');
        state.items.push({
          _id: product._id,
          quantity,
          brand_id,
          name: product.name,
          image_url: product.image_url,
          color: product.color,
          price: product.price,
        });
      }

      saveStateToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      saveStateToLocalStorage(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
      saveStateToLocalStorage(state);
    });
    builder.addCase(removeItemFromCart.fulfilled, (state, action) => {
      // Update local state after successful backend removal
      state.items = state.items.filter((item) => item._id !== action.payload);
      saveStateToLocalStorage(state);
    });
    builder.addCase(updateCartQuantity.fulfilled, (state, action) => {
      const { id, quantity } = action.payload;
      console.log(action.payload);
      const existingItem = state.items.find((item) => item._id === id);
      existingItem.quantity = quantity;
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

    console.log('This is session id attached' + session_id);

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
    const { items } = state.cart;
    const user = state.auth;
    const session_id = localStorage.getItem('session_id');
    const headers = {};

    if (user.token) {
      headers['Authorization'] = user.token;
    } else {
      headers['Session-ID'] = session_id;
    }

    const response = await axiosInstance.post(
      '/api/cart/update',
      { items },
      { headers }
    );

    console.log(response);

    localStorage.setItem('session_id', response.data.session_id);
  }
);

export const updateCartQuantity = createAsyncThunk(
  'cart/updateCartQuantity',
  async (req, { getState, rejectWithValue }) => {
    const state = getState();
    const user = state.auth;
    const session_id = localStorage.getItem('session_id');
    const headers = {};

    if (user.token) {
      headers['Authorization'] = user.token;
    } else {
      headers['Session-ID'] = session_id;
    }

    try {
      const response = await axiosInstance.put(
        `/api/cart/item/${req.id}`,
        { req },
        { headers }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  'cart/removeItemFromCart',
  async (product_id, { getState, rejectWithValue }) => {
    const state = getState();
    const user = state.auth;
    const session_id = localStorage.getItem('session_id');
    const headers = {};

    if (user.token) {
      headers['Authorization'] = user.token;
    } else {
      headers['Session-ID'] = session_id;
    }

    try {
      await axiosInstance.delete(`/api/cart/item/${product_id}`, { headers });
      return product_id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const { addToCart, clearCart, changeQuantity } = cartSlice.actions;

export default cartSlice;
