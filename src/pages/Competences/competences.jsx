import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap'; // Importe la bibliothèque GSAP pour les animations

import './competences.css'; 

import Collapses from '../../components/Collapses/collapses'; 
import HTML5 from '../../assets/HTML5.jpg'; 
import CSS3 from '../../assets/CSS3.jpg'; 
import JavaScript from '../../assets/JavaScript.jpg'; 
import ReactJs from '../../assets/React.jpg'; 
import NodeJs from '../../assets/Nodejs.jpg';
import MongoDB from '../../assets/MongoDB.jpg'; 
import NPM from '../../assets/npm.jpg';
import Express from '../../assets/Express.jpg';
import Git from '../../assets/Git.jpg';
import VsCode from '../../assets/VsCode.jpg'; 
import Trello from '../../assets/Trello.jpg';
import Figma from '../../assets/Figma.jpg'; 
import Wakelet from '../../assets/Wakelet.jpg';
import GitHub from '../../assets/GitHub.jpg'; 

function Competences() {
  const slotRefTechnologies = useRef(null); // Référence à la zone contenant les images des technologies
  const slotRefOutils = useRef(null); // Référence à la zone contenant les images des outils
  const [isVisible, setIsVisibleTechnologies] = useState(false); // État pour contrôler la visibilité des images des technologies
  const [isTheVisible, setIsVisibleOutils] = useState(false); // État pour contrôler la visibilité des images des outils

  useEffect(() => {
    gsap.set('.image', { opacity: 0, y: 50 }); // Initialise l'opacité et la position des images à cacher avec GSAP
  }, []);

  const handleTechnologiesClick = () => {
    const imagesTechnologies = slotRefTechnologies.current.querySelectorAll('.image'); // Sélectionne toutes les images des technologies

    gsap.fromTo(
      imagesTechnologies,
      { opacity: 0, y: 50 }, // Début de l'animation avec une opacité de 0 et une position y de 50
      {
        duration: 1, // Durée de l'animation : 1 seconde
        opacity: 1, // Opacité finale : 1 (visible)
        y: 0, // Position y finale : 0 (position normale)
        stagger: 0.1, // Décalage entre chaque image
        ease: 'power4.out', // Type d'animation
      }
    );

    setIsVisibleTechnologies(true); // Définit l'état pour afficher les images des technologies
  };

  const handleOutilsClick = () => {
    const imagesOutils = slotRefOutils.current.querySelectorAll('.image'); // Sélectionne toutes les images des outils

    gsap.fromTo(
      imagesOutils,
      { opacity: 0, y: 50 }, // Début de l'animation avec une opacité de 0 et une position y de 50
      {
        duration: 1, // Durée de l'animation : 1 seconde
        opacity: 1, // Opacité finale : 1 (visible)
        y: 0, // Position y finale : 0 (position normale)
        stagger: 0.1, // Décalage entre chaque image
        ease: 'power4.out', // Type d'animation
      }
    );

    setIsVisibleOutils(true); // Définit l'état pour afficher les images des outils
  };

  return (
    <div className="competences-page">
     
      
      {/* Composant "Collapses" */}
      <Collapses />
        
      {/* Bloc "Mes technologies" */}
      <div className='bloc-title'>
        {/* Titre "Mes technologies" */}
        <h2 className='techno'>Mes technologies</h2>
        {/* Texte "Cliquez moi" */}
        <p className='buzzer'>Cliquez moi</p>
    
      
      {/* Zone d'affichage des images des technologies */}
      <div className="chevron-icon">
        <div className="slot" ref={slotRefTechnologies}>
          {/* Image et nom de chaque technologie */}
          <div className={`image-container ${isVisible ? "visible" : ""}`}>
            <img src={HTML5} alt="HTML5" className="image" />
            <div className="image-name">HTML5</div>
          </div>
          <div className={`image-container ${isVisible ? "visible" : ""}`}>
            <img src={CSS3} alt="CSS3" className="image" />
            <div className="image-name">CSS3</div>
          </div>
          <div className={`image-container ${isVisible ? "visible" : ""}`}>
            <img src={JavaScript} alt="JavaScript" className="image" />
            <div className="image-name">JavaScript</div>
          </div>
          <div className={`image-container ${isVisible ? "visible" : ""}`}>
            <img src={ReactJs} alt="React" className="image" />
            <div className="image-name">React</div>
          </div>
          <div className={`image-container ${isVisible ? "visible" : ""}`}>
            <img src={NodeJs} alt="NodeJS" className="image" />
            <div className="image-name">NodeJS</div>
          </div>
          <div className={`image-container ${isVisible ? "visible" : ""}`}>
            <img src={MongoDB} alt="MongoDB" className="image" />
            <div className="image-name">MongoDB</div>
          </div>
          <div className={`image-container ${isVisible ? "visible" : ""}`}>
            <img src={NPM} alt="NPM" className="image" />
            <div className="image-name">NPM</div>
          </div>
          <div className={`image-container ${isVisible ? "visible" : ""}`}>
            <img src={Express} alt="Express" className="image" />
            <div className="image-name">ExpressJs</div>
          </div>
        </div>
        {/* Bouton pour afficher les images des technologies */}
        <button className="btn-confettis" onClick={handleTechnologiesClick}><i className="fa-solid fa-chevron-down"></i></button>
      </div>
      

     
        {/* Titre "Mes outils" */}
        <h2 className='techno'>Mes outils</h2>
        {/* Texte "Cliquez moi" */}
        <p className='buzzer'>Cliquez moi</p>
     

      {/* Zone d'affichage des images des outils */}
      <div className="chevron-icon">
        <div className="slot" ref={slotRefOutils}>
          {/* Image et nom de chaque outil */}
          <div className={`image-container ${isTheVisible ? "visible" : ""}`}>
            <img src={VsCode} alt="VsCode" className="image" />
            <div className="image-name">VsCode</div>
          </div>
          <div className={`image-container ${isTheVisible ? "visible" : ""}`}>
            <img src={GitHub} alt="GitHub" className="image" />
            <div className="image-name">GitHub</div>
          </div>
          <div className={`image-container ${isTheVisible ? "visible" : ""}`}>
            <img src={Git} alt="Git" className="image" />
            <div className="image-name">Git</div>
          </div>
          <div className={`image-container ${isTheVisible ? "visible" : ""}`}>
            <img src={Trello} alt="Trello" className="image" />
            <div className="image-name">Trello</div>
          </div>
          <div className={`image-container ${isTheVisible ? "visible" : ""}`}>
            <img src={Figma} alt="Figma" className="image" />
            <div className="image-name">Figma</div>
          </div>
          <div className={`image-container ${isTheVisible ? "visible" : ""}`}>
            <img src={Wakelet} alt="Wakelet" className="image" />
            <div className="image-name">Wakelet</div>
          </div>
        </div>
        {/* Bouton pour afficher les images des outils */}
        <button className="btn-confettis" onClick={handleOutilsClick}><i className="fa-solid fa-chevron-down"></i></button>
      </div>
      </div>
     
      {/* Lien vers le portfolio */}
      <div className='link'>
        <i className="fa fa-arrow-right"></i>
        <a  href="/Portfolio">Afin d'avoir un aperçu de mon travail, venez visiter mon portfolio.</a>
      </div>
    </div>
  );
}

export default Competences; // Exporte le composant "Competences" pour qu'il puisse être utilisé ailleurs
