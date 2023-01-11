import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { allReducers } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = createStore(allReducers);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
