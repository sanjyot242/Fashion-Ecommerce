import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:5000',
  baseURL: 'https://fashion-ecommerce-backend-9deb.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      const session_id = localStorage.getItem('session_id');
      if (session_id) {
        config.headers['Session-ID'] = session_id;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
