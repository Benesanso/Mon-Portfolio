// Modal.jsx
import React from 'react';
import './modale.css';

const Modal = ({ isOpen, handleClose }) => {
  if (!isOpen) {
    return null;  // Ne rien afficher si la modal n'est pas ouverte
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de gestion de soumission du formulaire
    // Par exemple, vous pouvez envoyer les données à votre backend ou effectuer d'autres actions
    console.log('Formulaire soumis');
    handleClose(); // Fermer la modal après la soumission du formulaire
  };

  return (
    <div className="modal-contact" onClick={handleClose}>
      {/* Contenu du formulaire */}
      <div className="modal-content-contact" onClick={(e) => e.stopPropagation()}>
        {/* Empêche la fermeture de la modal lorsqu'on clique à l'intérieur */}
        <span className="close-contact" onClick={handleClose}>&times;</span>

        <form onSubmit={handleSubmit}className='form-contact'>
          {/* Champs du formulaire */}
          <label>
            Nom*:
            <input type="text" name="name" required />
          </label>

          <label>
            Prénom*:
            <input type="text" name="firstName" required />
          </label>

          <label>
            Votre email*:
            <input type="email" name="email" required />
          </label>

          <label>
            Votre société:
            <input type="text" name="company" />
          </label>

          <label className='message'>
            Votre message*:
            <textarea name="message" required></textarea>
          </label>

          <p className="small-text">* Champs obligatoires</p>

          <button type="submit"className="envoyer-button">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
