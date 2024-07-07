import { QueryClient } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';

export const queryClient = new QueryClient();

export async function fetchProductSummaries() {
  try {
    const response = await axiosInstance.get(
      '/api/products/getProductsSummaries'
    );

    if (!response.status == 200) {
      const error = new Error('An Error Occured while fetching data');
      error.code = response.status;
      error.info = await response.data;
      throw error;
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchProductDetailsById(productId) {
  try {
    const response = await axiosInstance.get(
      `/api/products/product/${productId}`
    );
    if (!response.status == 200) {
      const error = new Error('An Error Occured while fetching data');
      error.code = response.status;
      error.info = await response.data;
      throw error;
    }
    return { id: productId, details: response.data };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
