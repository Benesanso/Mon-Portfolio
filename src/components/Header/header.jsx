import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logoCouleur.png';
import './header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="container">
      {/* Affichage du logo  */}
        <img className="LOGO" src={logo} alt="mon logo avec mes initiales" />
      {/* Navigation entre les pages */}
      <nav className="navbar">
        {/* Lien vers la page avec une classe active si l'URL correspond */}
        <Link className={`link-nav ${location.pathname === '/' ? 'active' : ''}`} to="/">Accueil</Link>
        <Link className={`link-nav ${location.pathname === '/Competences' ? 'active' : ''}`} to="/Competences">Compétences</Link>
        <Link className={`link-nav ${location.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
}

export default Header;
