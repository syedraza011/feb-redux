import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore from "./redux/store";
import {Provider} from "react-redux";

//installation commands
//npm i redux react-redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={configureStore()}>
          <App />
      </Provider>

  </React.StrictMode>
);

