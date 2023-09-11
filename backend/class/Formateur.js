const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
 let User = new ( require('./User') );
const app = express();
const port = 8080;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234567',
  database: 'educationall_dev',
});
app.use(cors());


class Formateur {

getRequest=function(req,res){
   
   console.log("***** Formateur function get*****");
   //const formateurID=req.query.id;
   const query=`SELECT nom, prenom FROM formateur WHERE id = 1`;
   connection.query(query, (error, results) => {
    if (error) {
      console.log("Erreur lors de la requête :", error);
      res.status(500).send("Erreur lors de la récupération des informations du formateur");
    } else {
      // Vérifier si le formateur a été trouvé
      if (results.length > 0) {
        const formateur = results[0];
        
        const response = {
          nom: formateur.nom,
          prenom: formateur.prenom
        };
        
        res.end(JSON.stringify(response));
      } else {
        res.status(404).send("Formateur non trouvé");
      }
    }
  });
}
}
module.exports = Formateur;
