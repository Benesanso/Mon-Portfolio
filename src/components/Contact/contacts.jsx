// Contacts.jsx
import React, { useState } from 'react';
import './contacts.css';
import Modal from '../../components/Modale/modale';

const Contacts = () => {
  // États pour gérer l'ouverture de la modal et les sections e-mail/téléphone
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPhoneOpen, setPhoneOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Gestionnaire d'ouverture de la modal
  const handleModalOpen = () => {
    console.log('Opening modal');
    setModalOpen(true);
  };

  // Gestionnaire de fermeture de la modal
  const handleModalClose = () => {
    console.log('Closing modal');
    setIsEmailOpen(false);
    setModalOpen(false);

  };

  // Gestionnaire pour l'événement hover sur l'e-mail
  const handleEmailHover = () => {
 
  };

  return (
    <div className="contacts-box">
      {/* Section pour l'e-mail */}
      <div className='mail' onMouseOver={handleEmailHover} onClick={() => setIsEmailOpen(!isEmailOpen)}>
        <i className={`fas ${isEmailOpen ? 'fa-envelope-open' : 'fa-envelope'} icon`}></i>
        {isEmailOpen && (
          <>
            <span className="contact-infos" onClick={handleModalOpen}>
              benesanso34@gmail.com
            </span>
          </>
        )}
      </div>

      {/* Section pour le téléphone */}
      <div className='telephone'>
        <i
          className={`fas ${isPhoneOpen ? 'fa-phone-volume' : 'fa-phone'} icon`}
          onClick={() => setPhoneOpen(!isPhoneOpen)}
        ></i>
        {isPhoneOpen && <span className="contact-infos-tel">06.16.16.98.08</span>}
      </div>

      {/* Modal */}
      <Modal isOpen={modalOpen} handleClose={handleModalClose} />
    </div>
  );
};

export default Contacts;
