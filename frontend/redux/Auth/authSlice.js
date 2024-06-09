import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const initailAuthState = {
  user: null,
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
    loginFaliure(state, action) {
      (state.error = action.payload), (state.isLoading = false);
    },
    loginSuccess(state, action) {
      (state.user = action.payload),
        (state.isLoading = false),
        (state.error = null);
    },
  },
});

//creating action thunks

export const login = (userData) => {
  return async (dispatch) => {
    dispatch(loginActions.loginRequest());

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        userData
      );
      const user = response.data.user;
      if (user) {
        dispatch(loginActions.loginSuccess(user));
        console.log('login', user);
      }
    } catch (error) {
      dispatch(loginActions.loginFaliure(error.message));
    }
  };
};

export const loginActions = authSlice.actions;

export default authSlice;
