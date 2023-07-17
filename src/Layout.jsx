import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './layout.css';
import Header from './components/Header/header';
import Accueil from './pages/Accueil/accueil';
import Footer  from './components/Footer/footer';
import Competences from './pages/Competences/competences';
import Portfolio from './pages/Portfolio/portfolio';

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} /> {/* Route pour l'URL racine */}
        <Route path="/Competences" element={<Competences />} /> {/* Route pour l'URL racine */}
        <Route path="/Portfolio" element={<Portfolio />} /> {/* Route pour l'URL racine */}
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
