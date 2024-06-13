import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../src/utils/axiosInstance';

const initialProductState = {
  summaries: [],
  details: {},
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsSummaries.fulfilled, (state, action) => {
        state.summaries = action.payload;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.details[action.payload.id] = action.payload.details;
      })
      .addCase(getAllProductsSummaries.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

//Async thun for product summaries
export const getAllProductsSummaries = createAsyncThunk(
  'products/getAllProductsSummaries',
  async () => {
    const response = await axiosInstance.get(
      '/api/products/getProductsSummaries'
    );
    return response.data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  'products/fetchProductDetails',
  async (productId) => {
    const response = await axiosInstance.get(`/api/products/${productId}`);
    return { id: productId, details: response.data };
  }
);

export const productActions = productsSlice.actions;

export default productsSlice;
