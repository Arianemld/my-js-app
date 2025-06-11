const express = require('express');
const app = express();
const port = 3000;

// Définir la route pour la nouvelle fonctionnalité
app.get('/new-feature', (req, res) => {
  res.send('New Feature!');
});

// Si ce fichier est importé dans un test, ne démarrer le serveur que si c'est le fichier principal
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// Exporter l'application pour les tests
module.exports = app;
