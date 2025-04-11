import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import UserContextProvider from './context/userContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>
  </React.StrictMode>
);
