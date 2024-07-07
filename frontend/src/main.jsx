import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './utils/fontAwesome';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/http.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
