import React, { useState } from 'react';
import './collapses.css';

// Composant Collapse : représente un élément collapsible avec un titre et un contenu
const Collapse = ({ title, children, onCollapseToggle, isOpen }) => {
  const handleToggle = () => {
    onCollapseToggle();
  };

  // Formate le titre en remplaçant "OpenClassrooms" par un span avec une couleur personnalisée
  const formattedTitle = title.replace(
    'OpenClassrooms',
    '<span style="color: #7451EB;">OpenClassrooms</span>'
  );

  return (
    <div className='titre'>
      {/* Titre du Collapse avec un gestionnaire de clic et du HTML interne pour le formatage */}
      <h3 onClick={handleToggle} dangerouslySetInnerHTML={{ __html: formattedTitle }}></h3>
      {/* Affiche le contenu si le Collapse est ouvert (isOpen est true) */}
      {isOpen && <ul className="list-collapses">{children}</ul>}
    </div>
  );
};

const App = () => {
  const [activeCollapse, setActiveCollapse] = useState(null); // État pour stocker l'index du Collapse actif

  const handleCollapseToggle = (index) => {
    if (index === activeCollapse) {
      setActiveCollapse(null); // Ferme le Collapse s'il est déjà ouvert
    } else {
      setActiveCollapse(index); // Définit l'index du Collapse actif
    }
  };

  return (
    <div className='collapses contenu'>
      <div className='collapsesContent'>
         {/* Titre "Mes formations" */}
      <h2 className='formation'>Mes formations</h2>
      <div className='blocCollapse'>
        {/* Premier Collapse */}
        <Collapse
          title="Auxiliaire de Puériculture en réanimation pédiatrique"
          onCollapseToggle={() => handleCollapseToggle(1)}
          isOpen={activeCollapse === 1}
        >
          {/* Contenu du premier Collapse */}
          <li className='bloc1'>Rechercher, traiter et transmettre les informations pour assurer la continuité du travail.</li>
          <li className='bloc1'>Organiser son travail dans une équipe pluridisciplinaire.</li>
        </Collapse>
      </div>

      <div className='blocCollapse'>
        {/* Deuxième Collapse */}
        <Collapse
          title="Formation Développeur Web chez OpenClassrooms"
          onCollapseToggle={() => handleCollapseToggle(2)}
          isOpen={activeCollapse === 2}
        >
          {/* Contenu du deuxième Collapse */}
          <li className='bloc2'>Intégration web avec HTML - CSS.</li>
          <li className='bloc2'>Gestion de projet et outils de développeurs.</li>
          <li className='bloc2'>Optimisation et debug.</li>
          <li className='bloc2'>React.</li>
          <li className='bloc2'>Développement back-end avec NodeJS.</li>
          <li className='bloc2'>Publication d'un site web.</li>
        </Collapse>
      </div>

      <div className='blocCollapse'>
        {/* Troisième Collapse */}
        <Collapse
          title="Humanitaire"
          onCollapseToggle={() => handleCollapseToggle(3)}
          isOpen={activeCollapse === 3}
        >
          {/* Contenu du troisième Collapse */}
          <li className='bloc2'>Savoir s'adapter au mode de fonctionnement d'une équipe.</li>
          <li className='bloc2'>&Ecirc;tre ouvert à une autre culture.</li>
        </Collapse>
      </div>
      </div>
    </div>
  );
};

export default App;
