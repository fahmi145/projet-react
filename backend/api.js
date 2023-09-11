const express = require('express');
const router = express.Router();


//const axios = require('axios');
//const API = 'http://127.0.0.1:8080';


//const  Objet = require('./class/Objet');
const ApprenantClass = require('./class/Apprenant');
let Apprenant= new ApprenantClass();

const FormateurClass = require('./class/Formateur');
let Formateur = new FormateurClass();
const CoursClass = require('./class/Cours');
let Cours= new CoursClass();

const ExercicesClass = require('./class/Exercices');
let Exercices = new ExercicesClass();

const AdminClass = require('./class/Admin');
let Admin = new AdminClass();


/* GET api listing. */
router.all('*', (req, res) => {
    console.log("***** req.query : " + req.query +' req.url '+req.url); 
//res.send('api works');
    var requestUser = req.url.split('/');
    console.log("***** requestUser 0: " + requestUser[0] +' 1: '+requestUser[1] +' 2: '+requestUser[2] +' 3: '+requestUser[3]); 
    var Objet = eval(requestUser[1]);

    var fonction = requestUser[2];
    var attributes = requestUser[3];

    if (typeof Objet != 'udefined'){
        console.log("***** Object defined ***** "+typeof Objet); 
               Objet[fonction](req, res);
        }
      


});
module.exports = router;