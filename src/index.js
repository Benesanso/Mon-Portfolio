import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot depuis "react-dom/client" au lieu de "react-dom"
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';


const rootElement = document.getElementById('root');

// Utilisez createRoot depuis "react-dom/client"
createRoot(rootElement).render(
  <Router>
    <Layout />
  </Router>
);
