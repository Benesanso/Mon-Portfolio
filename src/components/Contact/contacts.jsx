import React, { useState } from 'react';
import './contacts.css';
import Modal from '../../components/Modale/modale';

const Contacts = () => {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPhoneOpen, setPhoneOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEmailToggle = () => {
    setIsEmailOpen(!isEmailOpen);
  };

  const handlePhoneToggle = () => {
    setPhoneOpen(!isPhoneOpen);
  };

  const handleEmailHover = () => {
    // Mettez à jour le style lorsque le curseur passe sur l'e-mail
    // Vous pouvez utiliser une classe pour cela ou utiliser directement des styles en ligne
  };

  const handleModalOpen = () => {
    console.log('Opening modal');
    setModalOpen(true);
  };

  const handleModalClose = () => {
    console.log('Closing modal');
    setIsEmailOpen(false);
    setModalOpen(false);
  };

  return (
    <div className="contacts-box">
      {/* Section pour l'e-mail */}
      <div
        className='mail'
        onMouseOver={handleEmailHover}
        onClick={handleEmailToggle}
      >
        <i
          className={`fas ${isEmailOpen ? 'fa-envelope-open' : 'fa-envelope'} icon`}
        ></i>
        {isEmailOpen && (
          <span className="contact-infos" onClick={handleModalOpen}>
            benesanso34@gmail.com
          </span>
        )}
      </div>

      {/* Section pour le téléphone */}
      <div className='telephone'>
        <i
          className={`fas ${isPhoneOpen ? 'fa-phone-volume' : 'fa-phone'} icon`}
          onClick={handlePhoneToggle}
        ></i>
        {isPhoneOpen && <span className="contact-infos">06.16.16.98.08</span>}
      </div>

      <Modal isOpen={modalOpen} handleClose={handleModalClose} />
    </div>
  );
};

export default Contacts;
