const express = require('express');
const mysql = require('mysql');
let Formations = new ( require('./Formations') );
const app = express();
const port = 8080;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234567',
  database: 'educationall_dev',
});

class Cours {
  postRequest(req, res) {
    console.log("***** Cours function post *****");

    const cours = {
      idCour: 2,
      nomCour: "les boucles en Python"
    };

    const query = 'INSERT INTO cours SET ?';
    connection.query(query, cours, (error, results) => {
      if (error) {
        console.log("Erreur lors de la requête :", error);
        res.status(500).send("Erreur lors de l'insertion du cours");
      } else {
        console.log("Cours inséré avec succès");
        res.status(200).send("Cours inséré avec succès");
      }
    });
  }
}

module.exports = Cours;
