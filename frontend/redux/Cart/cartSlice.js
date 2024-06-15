import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../src/utils/axiosInstance';

const initialCartState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  item_details: [],
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
        state.items.push({ _id: product._id, quantity, brand_id });
      }

      saveStateToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const { product_id } = action.payload;
      state.items = state.items.filter(
        (item) => item.product_id !== product_id
      );
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
    builder.addCase(fetchCartItemDetails.fulfilled, (state, action) => {
      state.item_details.push(action.payload.details);
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

export const fetchCartItemDetails = createAsyncThunk(
  'cart/fetchCartItemDetails',
  async (product_id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/api/products/product/${product_id}`
      );
      return { id: product_id, details: response.data };
    } catch (error) {
      return rejectWithValue('Failed to fetch product details.');
    }
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

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice;
