// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom';
import AppRoutes from './routes';
import './globals.css';

const root = document.getElementById('root');

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

createRoot(root).render(<App />);
