const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors()); // Permet d'autoriser les requêtes Cross-Origin (si votre frontend et backend ont des domaines différents)

// Configuration de la connexion à la base de données MariaDB
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mariadb.sys',
  password: '123456',
  database: 'educational_dev',
});

// Établir la connexion à la base de données
connection.connect((error) => {
  if (error) {
    console.error('Erreur de connexion à la base de données :', error);
  } else {
    console.log('Connecté à la base de données MariaDB');
  }
});

// Définir les routes de votre API
app.get('/api/v1/donnees', (req, res) => {
  // Exemple de route pour récupérer des données depuis la base de données
  connection.query('SELECT * FROM educationa_dev', (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des données :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    } else {
      res.json(results);
    }
  });
});
app.post('/api/v1/formateurs', (req, res) => {
  const { nom, prenom, email } = req.body;

  // Vérifiez que les données nécessaires sont fournies
  if (!nom || !prenom || !email) {
    res.status(400).json({ error: 'Veuillez fournir toutes les informations requises' });
    return;
  }

  // Insérer le nouveau formateur dans la base de données
  const query = 'INSERT INTO formateurs (nom, email, specialite) VALUES (?, ?, ?)';
  connection.query(query, [nom, prenom, email], (error, results) => {
    if (error) {
      console.error('Erreur lors de l\'ajout du formateur :', error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout du formateur' });
    } else {
      res.sendStatus(201);
    }
  });
});


// D'autres routes pour les opérations CRUD peuvent être définies ici

// Démarrer le serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
