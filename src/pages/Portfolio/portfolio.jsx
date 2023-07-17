import React from "react";
import Cards from '../../components/Cards/cards'; 
import Contacts from "../../components/Contact/contacts"; 
import './portfolio.css'; 

function Portfolio() {
  return (
    <div className="portfolio">
      {/* Div contenant le titre "Mon Portfolio" */}
      <h2 className="portfolio-title">Mon Portfolio</h2>

      {/* Composant "Cards" */}
      <Cards />

      {/* Div contenant le titre "Mon Contact" */}
      <h2 className="contact-title">Mes Contacts</h2>

      {/* Composant "Contacts" */}
      <Contacts />

      {/* Div contenant le lien de retour vers l'accueil */}
      <div className='link'>
        <i className="fa fa-arrow-right"></i>
        <a href="/">Vous pouvez revenir à l'acceuil si vous le souhaitez.</a>
      </div>
    </div>
  );
}

export default Portfolio; // Exporte le composant "Portfolio" pour qu'il puisse être utilisé ailleurs
