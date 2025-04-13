import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import UserContextProvider from './context/userContext';
import CaptainContextProvider from './context/captainContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CaptainContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </CaptainContextProvider>
  </React.StrictMode>
);
