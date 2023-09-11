const express = require('express');
let Formations = new ( require('./Formations') );
const app = express();
const port = 8080;
class Exercices {

    get=function(req,res){
        console.log("***** Exercices function get*****");
        const ExercicesID=req.query.idExercice;
        const query='SELECT nomExercice,noteExercice FROM Exercices WHERE idExercice =${ExercicesID}';
        connection.query(query, (error, results) => {
         if (error) {
           console.log("Erreur lors de la requête :", error);
           res.status(500).send("Erreur lors de la récupération des informations des exercices");
         } else {
        
           if (results.length > 0) {
             const Exercices = results[0];
             
             const response = {
               nomExercice: Exercices.nomExercice,
               noteExercice: Exercices.noteExercice
             };
             
             res.end(JSON.stringify(response));
           } else {
             res.status(404).send("Exercices non trouvé");
           }
         }
       });
     }
     }
module.exports = Exercices;
