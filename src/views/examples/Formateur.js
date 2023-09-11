import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardText,
    CardTitle,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
  } from "reactstrap";
  
  import { useForm, Controller } from "react-hook-form";
  
  import { useHistory } from "react-router-dom";
  import SideBar from "views/examples/SideBar";
  import React, { useState } from 'react';
  import AdminNavbar from "components/Navbars/AdminNavbar (copie 1)";
import FormateurNavbar from "components/Navbars/FormateurNavbar";

  
  
  const Formateur = () => {
    let history = useHistory();
    return (
      <>
      
      <div style={{ backgroundColor: '#ced4da', minHeight: '100vh' }}>
       
       <SideBar/>
       <FormateurNavbar/>
       <Card className="sidebar-card" style={{marginLeft:'233px', padding:'20' ,backgroundColor:'#ced4da'}}>
   <CardBody className="sidebar-card-body" style={{marginLeft:'250px',height:'720px', padding:'20' ,backgroundColor:'#ced4da'}}>
     <CardTitle className="Profile-title" style={{ marginLeft: '-250px',fontSize: '50px' , fontWeight: 'bold' ,color: '#343a40' }}>
     Profile
     </CardTitle>
     <img alt="Nom de l'apprenant" src={require("../../assets/img/theme/R.jpg")} style={{ marginLeft:'-250px',maxWidth: '20%', marginBottom: '-100px' }} />

     <CardText className="card-content" style={{ fontSize: '20px', color: '#888', transition: 'color 0.3s ease' }}>
     <h4 style={{ color: '#172b4d',fontSize:'30px' }}> Formateur</h4>
     <p style={{ color: '#172b4d' ,fontSize:'30px'}}> james Antonie</p>
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
    <Button color="primary" onClick={() => history.push('./gerer-formations')}>Gerer Formations</Button>
    <Button color="success" onClick={() => history.push('./cours-formateur')} style={{ marginLeft: '10px' }}>Gerer cours</Button>
    <Button color="danger" onClick={() => history.push('./exercices-formateur')} style={{ marginLeft: '10px' }}>Gerer exercices</Button>

  </div>
     
     </CardText>
   </CardBody>
 </Card>

      </div>
      
      </>
    );
  
  
  };
  
  export default Formateur;
  
  