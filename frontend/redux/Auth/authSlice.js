import { createSlice } from '@reduxjs/toolkit';

import axiosInstance from '../../src/utils/axiosInstance';
import { fetchCart } from '../Cart/cartSlice';

const initailAuthState = {
  user: null,
  token: localStorage.getItem('token') || null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initailAuthState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
    },
    requestFaliure(state, action) {
      (state.error = action.payload), (state.isLoading = false);
    },
    requestSuccess(state, action) {
      (state.user = action.payload),
        (state.token = action.payload.token),
        (state.isLoading = false),
        (state.error = null);
    },
    checkToken(state) {
      const token = localStorage.getItem('token');
      if (token) {
        state.token = token;
        // Optionally, you can decode the token and set user state here if needed
      } else {
        state.token = null;
        state.user = null;
      }
    },
  },
});

//creating action thunks

export const login = (userData) => {
  return async (dispatch) => {
    dispatch(loginActions.loginRequest());

    try {
      const response = await axiosInstance.post(`/api/auth/login`, userData);
      const user = response.data.user;
      if (user) {
        localStorage.setItem('token', user.token);
        dispatch(loginActions.requestSuccess(user));
        dispatch(fetchCart());
        console.log('login', user);
      }
    } catch (error) {
      dispatch(loginActions.requestFaliure(error.message));
    }
  };
};

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post(`/api/auth/register`, userData);
      const user = response.data.user;
      if (user) {
        localStorage.setItem('token', user.token);
        dispatch(loginActions.requestSuccess(user));
        console.log('register', user);
      }
    } catch (error) {
      dispatch(loginActions.requestFaliure(error.message));
    }
  };
};

export const loginActions = authSlice.actions;

export default authSlice;
