import React from 'react';
import GlobalStyle from './globalStyles';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'reset-css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
