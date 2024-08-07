// // MIgrated to tanstack query as its better for server state management

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axiosInstance from '../../src/utils/axiosInstance';

// const initialProductState = {
//   summaries: [],
//   details: {},
//   error: null,
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: initialProductState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // .addCase(getAllProductsSummaries.fulfilled, (state, action) => {
//       //   state.summaries = action.payload;
//       //   state.error = null;
//       // })

//       //07/07 sanjyot - Migrated to Tanstack Query no longer need for slice
//       .addCase(fetchProductDetails.fulfilled, (state, action) => {
//         state.details[action.payload.id] = action.payload.details;
//         state.error = null;
//       })
//       // .addCase(getAllProductsSummaries.rejected, (state, action) => {
//       //   state.error = action.error.message;
//       // })
//       //07/07 sanjyot - Migrated to Tanstack Query no longer need for slice
//       .addCase(fetchProductDetails.rejected, (state, action) => {
//         state.error = action.payload || action.error.message;
//       });
//   },
// });

// //Async thun for product summaries
// // export const getAllProductsSummaries = createAsyncThunk(
// //   'products/getAllProductsSummaries',
// //   async (_, { rejectWithValue }) => {
// //     try {
// //       const response = await axiosInstance.get(
// //         '/api/products/getProductsSummaries'
// //       );
// //       return response.data;
// //     } catch (error) {
// //       return rejectWithValue('Failed to fetch Product summary');
// //     }
// //   }
// // );

// //07/07 sanjyot - Migrated to Tanstack Query no longer need for slice

// export const fetchProductDetails = createAsyncThunk(
//   'products/fetchProductDetails',
//   async (productId, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(
//         `/api/products/product/${productId}`
//       );
//       return { id: productId, details: response.data };
//     } catch (error) {
//       return rejectWithValue('Failed to fetch product details.');
//     }
//   }
// );

// export const productActions = productsSlice.actions;

// export default productsSlice;
