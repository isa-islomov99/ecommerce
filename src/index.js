import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_base.scss';
import "antd/dist/antd.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
