import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import playerReducer from './duck';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(playerReducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>), 
  document.getElementById('root')
);
registerServiceWorker();
