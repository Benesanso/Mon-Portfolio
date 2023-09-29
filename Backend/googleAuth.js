// googleAuth.js

const { google } = require('google-auth-library');
const path = require('path');

// Charger les informations d'identification depuis le fichier JSON
const credentialsPath = path.join(__dirname, 'config', 'credentials.json');
const credentials = require(credentialsPath);

// Configurer l'authentification avec le bon scope pour l'API Gmail
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: 'https://www.googleapis.com/auth/gmail.send', // Mettez à jour le scope
});

// Exporter directement l'objet d'authentification
module.exports = auth;
