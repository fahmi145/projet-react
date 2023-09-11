const express = require('express');
const cors = require('cors');
let User = new ( require('./User') );
const mysql = require('mysql');
const app = express();
const port = 8080;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234567',
  database: 'educationall_dev',
});
app.use(cors());



class Apprenant {

getRequest=function(req,res){
   console.log("***** Apprenant function get*****");
   //const apprenantID=req.query.id;
   const query=`SELECT classe,filiere FROM Apprenant WHERE id = 1`;
   connection.query(query, (error, results) => {
    if (error) {
      console.log("Erreur lors de la requête :", error);
      res.status(500).send("Erreur lors de la récupération des informations du l'apprenant");
    } else {
      // Vérifier si l'apprenant a été trouvé
      if (results.length > 0) {
        const apprenant = results[0];
        
        const response = {
          classe: apprenant.classe,
          filiere: apprenant.filiere
        };
        
        res.end(JSON.stringify(response));
      } else {
        res.status(404).send("Apprenant non trouvé");
      }
    }
  });
}
}
module.exports = Apprenant;
