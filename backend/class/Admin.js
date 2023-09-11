const express = require('express');
let User = new ( require('./User') );
const app = express();
const port = 8080;

class Admin{

get=function(req,res){
   console.log("***** Apprenant function get*****");
   const apprenantID=req.query.id;
   const query='SELECT classe,filiere FROM apprenant WHERE id =${apprenantID}';
   connection.query(query, (error, results) => {
    if (error) {
      console.log("Erreur lors de la requête :", error);
      res.status(500).send("Erreur lors de la récupération des informations du l'apprenant");
    } else {
      // Vérifier si l'apprenant a été trouvé
      if (results.length > 0) {
        const admin = results[0];
        
        const response = {
          nom: admin.nom,
          prenom: admin.prenom
        };
        
        res.end(JSON.stringify(response));
      } else {
        res.status(404).send("Admin non trouvé");
      }
    }
  });
}
}
module.exports = Admin;
