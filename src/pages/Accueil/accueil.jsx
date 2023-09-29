// Story.js
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import './accueil.css';
import TelechargerCV from '../../components/CV/telechargerCV';

function Story() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      delay: 150,
    });

    typewriter
      .pauseFor(1000)
      .typeString('Bienvenue sur mon Portfolio !')
      .start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <main className='accueil'>
      <article className='acceuil-tittle'>
        <h1 className='title' ref={typewriterRef}>
          Bienvenue sur mon Portfolio !
        </h1>
        <div className='bloc-intro'>
          <div className='presentation'>
            <h2>Qui suis-je ?</h2>
            <p>Je me présente, <strong>Bénédicte SANSONNETTE</strong>, Développeuse Intégrateuse Web "Junior".</p>
            <p>Après 14 ans dans le domaine de la santé, je me suis reconvertie dans le développement web pour:</p>
          </div>
          <ul className='intro'>
            <li className='content'>Acquérir de nouvelles compétences</li>
            <li className='content'>Explorer ma passion pour la technologie</li>
            <li className='content'>Créer des applications web innovantes pour donner vie à vos projets</li>
            <li className='content'>Travailler sur des projets variés</li>
            <li className='content'>Collaborer avec une approche agile</li>
            <li className='content'>Contribuer à une entreprise dynamique</li>
            <TelechargerCV />
          </ul>
        </div>
        <div className='link'>
          <i className="fa fa-arrow-right"></i>
          <a href="/Competences">J'ai hâte de mettre mon savoir aux profits de vos projets pour cela, venez en apprendre plus sur mes compétences.</a>
        </div>
      </article>
    </main>
  );
}

export default Story;
