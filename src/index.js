import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor }from './redux/store';
import './index.css';
import App from './App';



console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <BrowserRouter >
           <App />
        </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


