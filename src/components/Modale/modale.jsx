// Modal.jsx
import React, { useState } from 'react';
import './modale.css';

const Modal = ({ isOpen, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          firstName: formData.firstName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        console.log('Formulaire soumis avec succès !');
        // Réinitialisez le formulaire ou faites d'autres actions nécessaires
      } else {
        console.error('Erreur lors de la soumission du formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire', error);
    }
  };

  if (!isOpen) {
    return null;  // Ne rien afficher si la modal n'est pas ouverte
  }

  return (
    <div className="modal-contact" onClick={handleClose}>
      {/* Contenu du formulaire */}
      <div className="modal-content-contact" onClick={(e) => e.stopPropagation()}>
        {/* Empêche la fermeture de la modal lorsqu'on clique à l'intérieur */}
        <span className="close-contact" onClick={handleClose}>&times;</span>

        <form onSubmit={handleSubmit} className='form-contact'>
          {/* Champs du formulaire */}
          <label>
            Nom*:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Prénom*:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </label>

          <label>
            Votre email*:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Votre société:
            <input type="text" name="company" value={formData.company} onChange={handleChange} />
          </label>

          <label className='message'>
            Votre message*:
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </label>

          <p className="small-text">* Champs obligatoires</p>

          <button type="submit" className="envoyer-button">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
