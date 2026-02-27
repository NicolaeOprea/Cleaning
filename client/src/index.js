import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* src/styles/index.css */
import "./styles/variable.css";
import "./styles/reset.css";
import "./styles/layout.css";

import "./styles/ui.css";
import "./styles/header.css";
import "./styles/mobile-menu.css";
import "./styles/footer.css";

import "./styles/hero-home.css";
import "./styles/card.css";
import "./styles/uberuns.css";

import "./styles/responsive.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

