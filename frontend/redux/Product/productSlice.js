import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../src/utils/axiosInstance';

const initialProductState = {
  products: [],
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductState,
  reducers: {
    listAllProducts(state, action) {
      state.products = action.payload;
    },
    listAllProductFailure(state, action) {
      state.error = action.payload;
    },
  },
});

//creating action thunk
export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get(`/api/products/getProducts`);
      console.log(response);
      dispatch(productActions.listAllProducts(response.data));
    } catch (error) {
      dispatch(productActions.listAllProductFailure(error));
    }
  };
};

export const productActions = productsSlice.actions;

export default productsSlice;
