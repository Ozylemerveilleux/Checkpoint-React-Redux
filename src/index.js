import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './JS/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider Store={Store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


