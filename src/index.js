import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import './style/reset.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
