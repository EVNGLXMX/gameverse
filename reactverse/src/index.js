import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import {Provider} from 'react-redux';
import store from './redux/store';

axios.defaults.baseURL='http://127.0.0.1:8000/';
axios.defaults.headers.common['Authorization']='Bearer ' + localStorage.getItem('accesstoken');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);