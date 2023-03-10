import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
