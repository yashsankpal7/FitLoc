import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter , HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <HashRouter basename="/">
        <App />
      </HashRouter>
  </React.StrictMode>
);