import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import createRoot from "react-dom/client"
import { createRoot } from 'react-dom/client';

// Use createRoot from react-dom/client
createRoot(document.getElementById('root')).render(
  <App />
);