import React, { useState } from 'react';
import CurriculumVitaeImage from '../../assets/CurriculumVitae.pdf';

const TelechargerCV = () => {
  const [isHovered, setIsHovered] = useState(false);

  const telechargerCV = () => {
    const urlDuCV = CurriculumVitaeImage;
    const lienDeTelechargement = document.createElement('a');
    lienDeTelechargement.href = urlDuCV;
    lienDeTelechargement.download = 'Mon_CV_Sansonnette_Bénédicte.pdf';
    document.body.appendChild(lienDeTelechargement);
    lienDeTelechargement.click();
    document.body.removeChild(lienDeTelechargement);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const textStyle = {
    textDecoration: isHovered ? 'underline' : 'none',
    cursor: isHovered ? 'pointer' : 'auto',
  };

  return (
    <div className='content' onClick={telechargerCV} onMouseEnter={handleHover} onMouseLeave={handleLeave} style={textStyle}>
      <strong>Mon CV à télécharger</strong>
      <img src={CurriculumVitaeImage} alt='Curriculum Vitae' style={{ display: 'none' }} />
    </div>
  );
};

export default TelechargerCV;
