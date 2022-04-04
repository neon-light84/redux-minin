import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import rootReducer from "./redux/rootReducer";
import {createStore, applyMiddleware} from 'redux';

// function loggerMiddleware(store) {
//     return function (next) {
//         return function (action) {
//             const result = next(action);
//             console.log('Middleware', store.getState());
//             return result;
//         }
//     }
// }

// тоже самое, но в сокращенном синтаксисе
const loggerMiddleware = store => next => action => {
    const result = next(action);
    console.log('Middleware', store.getState());
    return result;
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
  // <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>,
  // </React.StrictMode>

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
