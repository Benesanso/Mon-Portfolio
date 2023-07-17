import React, { useState } from 'react';
import './contacts.css';

const Contacts = () => {
  const [isEmailOpen, setEmailOpen] = useState(false); // État pour contrôler l'ouverture/fermeture de l'e-mail
  const [isPhoneOpen, setPhoneOpen] = useState(false); // État pour contrôler l'ouverture/fermeture du téléphone

  const handleEmailToggle = () => {
    setEmailOpen(!isEmailOpen); // Inverse l'état de l'e-mail
  };

  const handlePhoneToggle = () => {
    setPhoneOpen(!isPhoneOpen); // Inverse l'état du téléphone
  };

  return (
    <div className="contacts-box">
      {/* Section pour l'e-mail */}
      <div className='mail'>
        <i
          className={`fas ${isEmailOpen ? 'fa-envelope-open' : 'fa-envelope'} icon`}
          onClick={handleEmailToggle}
        ></i>
        {/* Affiche l'e-mail si l'état isEmailOpen est vrai */}
        {isEmailOpen && <span className="contact-infos">benesanso34@gmail.com</span>}
      </div>
      
      {/* Section pour le téléphone */}
      <div className='telephone'>
        <i
          className={`fas ${isPhoneOpen ? 'fa-phone-volume' : 'fa-phone'} icon`}
          onClick={handlePhoneToggle}
        ></i>
        {/* Affiche le numéro de téléphone si l'état isPhoneOpen est vrai */}
        {isPhoneOpen && <span className="contact-infos">06.16.16.98.08</span>}
      </div>
    </div>
  );
};

export default Contacts;
