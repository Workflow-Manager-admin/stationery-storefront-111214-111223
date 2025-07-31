import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React Router needs BrowserRouter in the app for navigation context
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
