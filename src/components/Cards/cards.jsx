import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoBooki from '../../assets/Booki.png';
import Bluel from '../../assets/Bluel.png';
import Nina from '../../assets/Nina.png';
import Kasa from '../../assets/Kasa.png';
import Grimoire from '../../assets/Grimoire.png';
import Point from '../../assets/Point.png';
import './cards.css';

const handleOpenLink = (url) => {
    // Fonction pour ouvrir un lien dans la même fenêtre
    window.open(url, "_self");
  };
  
  function Card() {
    const [isModalOpen, setIsModalOpen,] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [isTroisModalOpen, setIsTroisModalOpen] = useState(false);
    const [isQuatreModalOpen, setIsQuatreModalOpen] = useState(false);
    const [isCinqModalOpen, setIsCinqModalOpen] = useState(false);
    const [isSixModalOpen, setIsSixModalOpen] = useState(false);

    const openModal = () => {
      // Fonction pour ouvrir la modale
      setIsModalOpen(true);
    };
    
    const secondOpenModal  = () => {
      // Fonction pour ouvrir la modale
      setIsSecondModalOpen(true);
    };

    const troisOpenModal = () => {
      // Fonction pour ouvrir la modale
      setIsTroisModalOpen(true);
    };

    const quatreOpenModal = () => {
      // Fonction pour ouvrir la modale
      setIsQuatreModalOpen(true);
    };

    const cinqOpenModal = () => {
      // Fonction pour ouvrir la modale
      setIsCinqModalOpen(true);
    };

    const sixOpenModal = () => {
      // Fonction pour ouvrir la modale
      setIsSixModalOpen(true);
    };
   
    const closeModal = () => {
      // Fonction pour fermer la modale
      setIsModalOpen(false);
      setIsSecondModalOpen(false);
      setIsTroisModalOpen(false);
      setIsQuatreModalOpen(false);
      setIsCinqModalOpen(false);
      setIsSixModalOpen(false);
    };
    
    return (
      <div className="card-container">
        <div className="section-card">
          <div className='projet-card' onClick={secondOpenModal}>
            {/* Image de couverture de la carte */}
            <button className="card-photos">
              <img className="photos" src={LogoBooki} alt="Site de location d'appartement booki" />
            </button>
            <div>
              <p className='text-card'>Implémenter une interface responsive, versionner son projet avec Git et Github.</p>
              <p className='text-card'>Créez la page d'accueil d'une agence de voyage avec HTML & CSS.</p>
            </div>
          </div>
  
          <div className='projet-card' onClick={troisOpenModal}>
            {/* Image de couverture de la carte */}
            <button className="card-photos">
              <img className="photos" src={Bluel} alt="Site Sophie Bluel Architecte d'intérieur"/>
            </button>
            <div>
              <p className='text-card'>Créer une page de présentation des travaux de l'architecte.</p>
              <p className='text-card'>Créer la page de connexion de l'administrateur du site, la modale permettant d'uploader de nouveaux médias.</p>
            </div>
          </div>
  
          <div className='projet-card' onClick={quatreOpenModal}>
            {/* Image de couverture de la carte */}
            <button className="card-photos">
              <img className="photos" src={Nina} alt="Site Nina Carducci Photographe"/>
            </button>
            <div>
              <p className='text-card'>Optimiser les performances d’un site web.</p>
              <p className='text-card'>Débugger un site web grâce aux Chrome DevTools.</p>
              <p className='text-card'>Rédiger un cahier de recette pour tester un site.</p>
            </div>
          </div>
        </div>
  
        <div className="section-card">
          <div className='projet-card' onClick={cinqOpenModal}>
            {/* Image de couverture de la carte */}
            <button className="card-photos">
              <img className="photos" src={Kasa} alt="Site de location appartement entre particulier" />
            </button>
            <div>
              <p className='text-card'>Configurer la navigation entre les pages de l'application avec React Router et grâce à des composants React.</p>
              <p className='text-card'>Développer une interface web avec Sass et mettre en œuvre des animations CSS.</p>
              <p className='text-card'>Initialiser une application avec Create React App.</p>
            </div>
          </div>
  
          <div className='projet-card' onClick={sixOpenModal}>
            {/* Image de couverture de la carte */}
            <button className="card-photos">
              <img className="photos" src={Grimoire} alt="Site Mon vieux grimoire pour le référencement et la notation de livres" />
            </button>
            <div>
              <p className='text-card'>Implémenter un modèle logique de données conformément à la réglementation.</p>
              <p className='text-card'>Stocker des données de manière sécurisée.</p>
              <p className='text-card'>Mettre en œuvre des opérations CRUD de manière sécurisée.</p>
            </div>
          </div>
  
          <div className='projet-card' onClick={openModal}>
            {/* Image de couverture de la carte */}
            <button className="card-photos">
              <img className="photos" src={Point} alt="logo point d'interrogation" />
            </button>
            {/* Titre de la carte */}
            <div className="text-container">
              <p className='text-card'>Votre futur projet</p>
            </div>
          </div>
  
          {/* 1er Modale */}
          <div className={`modal ${isModalOpen ? 'open' : ''}`}>
            <div className="modal-content">
              <h2 className='modal-title'>Un projet ?</h2>
              <p className='modal-text'>Ne cherchez plus, vous avez trouvé votre développeur web.</p>
              <p className='modal-text'>Alors ...</p>
              <p className='modal-text'>Planifions ensemble le développement de votre site.</p>
              <div className='emoji'> &#128578;</div>
              <button className='btn-modal' onClick={closeModal}>Fermer</button>
            </div>
          </div>

           {/* 2nd Modale */}
           <div className={`modal ${isSecondModalOpen ? 'open' : ''}`}>
            <div className="modal-content">
              <h2 className='modal-title'>Projet Booki</h2>
              <button className="card-photos">
              <img className="modal-photos" src={LogoBooki} alt="Site de location d'appartement booki" onClick={() => handleOpenLink("https://benesanso.github.io/projet2_booki")}/>
              </button>
              <Link className=" lienGithub" to="https://github.com/Benesanso/projet2_booki.git">Lien vers Github</Link>
              <h3>Description du projet</h3>
              <p className='second-modal-text'>Je débute mon alternance en tant que développeur web au sein de la start-up Booki. Je suis chargé d'intégrer l'interface du site conformément à une maquette et une interface responsive avec HTML et CSS.</p>
              <h3>Problèmatiques rencontrées</h3>
              <p className='second-modal-text'>Ce fut mon premier projet donc j'ai du mettre en place les bonnes pratiques. Difficultés pour l'utilisation des flexbox, j'ai pu bien comprendre grâce à Flexbox Froggy.</p>
              <h3>Compétences acquises</h3>
              <p className='second-modal-text'>J'ai ainsi pu acquérir des compétences en HTML et CSS. J'ai appris à versionner mon projet avec Git et Github.</p>
              <button className='btn-modal' onClick={closeModal}>Fermer</button>
            </div>
          </div>

           {/* 3ième Modale */}
           <div className={`modal ${isTroisModalOpen ? 'open' : ''}`}>
            <div className="modal-content">
              <h2 className='modal-title'>Projet Sophie BLUEL</h2>
              <button className="card-photos">
              <img className="modal-photos" src={Bluel} alt="Site Sophie Bluel Architecte d'intérieur" onClick={() => handleOpenLink("https://github.com/Benesanso/Portfolio-architecte-sophie-bluel.git")}/>
              </button>
              <Link className=" lienGithub" to="https://github.com/Benesanso/Portfolio-architecte-sophie-bluel.git">Lien vers Github</Link>
              <h3>Description du projet</h3>
              <p className='second-modal-text'>Je travaille comme développeur front-end pour l’agence ArchiWebos.</p>
              <p className='second-modal-text'>Je dois développer, la page de présentation des travaux de l'architecte, la page de connexion de l'administrateur du site et la modale permettant d'uploader de nouveaux médias.</p>
              <h3>Problèmatiques rencontrées</h3>
              <p className='second-modal-text'>Mes premiers pas avec JavaScript, mes difficultées fut de récupérer les données utilisateurs provenant d'une API et vérifier que l'utilisateur avait bien un token.</p>
              <p className='second-modal-text'>Grâce à mes recherches, j'ai pu surmonter mes problèmes et apprendre à manipuler JavaScript.</p>
              <h3>Compétences acquises</h3>
              <p className='second-modal-text'>J'ai ainsi pu acquérir des compétences pour  manipuler les éléments du DOM avec JavaScript, récupérer les données utilisateurs et gérer les événements utilisateurs avec JavaScript.</p>
              <button className='btn-modal' onClick={closeModal}>Fermer</button>
            </div>
          </div>

            {/* 4ième Modale */}
            <div className={`modal ${isQuatreModalOpen ? 'open' : ''}`}>
            <div className="modal-content">
              <h2 className='modal-title'>Projet Nina CARDUCCI</h2>
              <button className="card-photos">
              <img className="modal-photos" src={Nina} alt="Site Nina Carducci Photographe" onClick={() => handleOpenLink("https://benesanso.github.io/Nina-Carducci-photographe/")}/>
              </button>
              <Link className=" lienGithub" to="https://github.com/Benesanso/Nina-Carducci-photographe.git">Lien vers Github</Link>
              <h3>Description du projet</h3>
              <p className='second-modal-text'>Je suis développeur freelance, j'ai analysé plusieurs sites internet et j'ai vu le site de Nina Carducci, une photographe et j'ai décidé de proposer mes services d’optimisation SEO.</p>
              <h3>Problèmatiques rencontrées</h3>
              <p className='second-modal-text'>J'ai du m'approprier l'outil Lighthouse afin de pouvoir corriger les erreurs et obtenir un score supérieur à 90.</p>
              <h3>Compétences acquises</h3>
              <p className='second-modal-text'>Grâce à ce projet, j'ai pu apprendre à optimiser les performances d’un site web, à débugger un site web grâce aux Chrome DevTools et à rédiger un cahier de recette pour tester un site.</p>
              <button className='btn-modal' onClick={closeModal}>Fermer</button>
            </div>
          </div>

          {/* 5ième Modale */}
          <div className={`modal ${isCinqModalOpen ? 'open' : ''}`}>
            <div className="modal-content">
              <h2 className='modal-title'>Projet KASA</h2>
              <button className="card-photos">
              <img className="modal-photos"  src={Kasa} alt="Site de location appartement entre particulier" onClick={() => handleOpenLink("https://dreamy-lollipop-4e75f5.netlify.app")} />
              </button>
              <Link className=" lienGithub" to="https://github.com/Benesanso/Kasa.git">Lien vers Github</Link>
              <h3>Description du projet</h3>
              <p className='second-modal-text'>Kasa me recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant.</p>
              <h3>Problèmatiques rencontrées</h3>
              <p className='second-modal-text'>Grâce à la documentation de React j'ai pu mettre en place les Routes React Router et créer des composants réutilisables.</p>
              <h3>Compétences acquises</h3>
              <p className='second-modal-text'>J'ai ainsi pu développer des éléments de l'interface d'un site web grâce à des composants React, configurer la navigation entre les pages de l'application avec React Router et initialiser une application avec Create React App.</p>
              <button className='btn-modal' onClick={closeModal}>Fermer</button>
            </div>
          </div>
          
          {/* 6ième Modale */}
          <div className={`modal ${isSixModalOpen ? 'open' : ''}`}>
            <div className="modal-content">
              <h2 className='modal-title'>Projet Mon Vieux Grimoire</h2>
              <button className="card-photos">
              <img className="modal-photos"  src={Grimoire} alt="Site Mon vieux grimoire pour le référencement et la notation de livres"  onClick={() => handleOpenLink("https://github.com/Benesanso/Mon-vieux-grimoire.git")}/>
              </button>
              <Link className=" lienGithub" to="https://github.com/Benesanso/Mon-vieux-grimoire.git">Lien vers Github</Link>
              <h3>Description du projet</h3>
              <p className='second-modal-text'>Je suis développeur back-end en freelance depuis maintenant un an et j'ai l’habitude de travailler avec Kévin, un développeur front-end. Il me  contacte pour me proposer de travailler avec lui sur un tout nouveau projet qui lui a été proposé. Il s’agit d’une petite chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres.</p>
              <h3>Problèmatiques rencontrées</h3>
              <p className='second-modal-text'>Mettre en place des opérations CRUD de manière sécurisée et adopter une structure qui facilite la compréhension, la mainteance et l'évolution du site. A l'aide des cours et de recherche, j'ai pu comprendre et atteindre mon objectif.</p>
              <h3>Compétences acquises</h3>
              <p className='second-modal-text'>Mon Vieux Grimoire m'a permis d'implémenter un modèle logique de données conformément à la réglementation, de stocker des données de manière sécurisée et de mettre en œuvre des opérations CRUD de manière sécurisée.</p>
              <button className='btn-modal' onClick={closeModal}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  