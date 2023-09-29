const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const credentials = require('./googleAuth');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4001;

// Connexion à MongoDB
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// Gestion des événements de connexion à la base de données
mongoose.connection.on('connected', () => {
  console.log(`Connecté à la base de données MongoDB sur ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
  console.log('Erreur de connexion à la base de données :', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Déconnecté de la base de données MongoDB');
});

// Middleware pour activer CORS
app.use(cors());
// Middleware pour traiter le corps des requêtes JSON
app.use(bodyParser.json());

// Définition du modèle Mongoose pour le formulaire
const formSchema = new mongoose.Schema({
  name: String,
  firstName: String,
  email: String,
  company: String,
  message: String,
});

const Form = mongoose.model('Form', formSchema);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: credentials.client_id,
      clientSecret: credentials.client_secret,
      refreshToken: credentials.refresh_token,
      accessToken: "011027649163882428f46b99b767dc7736c35585", 
    },
  });

// Route pour gérer les soumissions de formulaire de contact
app.post('/api/contact', async (req, res) => {
  console.log('Route /api/contact atteinte');
  const formData = req.body;
  console.log('Formulaire reçu :', formData);

  // Enregistrement dans MongoDB
  try {
    const newForm = new Form(formData);
    await newForm.save();
    console.log('Formulaire enregistré dans MongoDB');

    // Envoyer un e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'benesanso34@gmail.com',
      subject: 'Nouveau formulaire de contact',
      text: `Nom: ${formData.name}\nPrénom: ${formData.firstName}\nEmail: ${formData.email}\nSociété: ${formData.company}\nMessage: ${formData.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail', error);
      } else {
        console.log('E-mail envoyé :', info.response);
      }
    });

    res.json({ message: 'Formulaire reçu avec succès!' });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du formulaire dans MongoDB', error);
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement du formulaire' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
