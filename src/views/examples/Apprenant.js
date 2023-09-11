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
  import React, { useState } from 'react';
import SideBarA from "./SideBarA";
import AdminNavbar from "components/Navbars/AdminNavbar (copie 1)";

import Cours from "./Cours";
  
  
  
  const Apprenant = () => {
    
   
    let history = useHistory();
  
    return (
      <>
      <div style={{ backgroundColor: '#ced4da', minHeight: '100vh' }}>
     

   <SideBarA/>
   <AdminNavbar/>
   <Card className="sidebar-card" style={{marginLeft:'203px', padding:'20' ,backgroundColor:'#ced4da'}}>
   <CardBody className="sidebar-card-body" style={{marginLeft:'250px',height:'720px', padding:'20' ,backgroundColor:'#ced4da'}}>
     <CardTitle className="Profile-title" style={{ marginLeft: '-250px',fontSize: '50px' , fontWeight: 'bold' ,color: '#343a40' }}>
     Profile
     </CardTitle>
     <img alt="Nom de l'apprenant" src="/argon-dashboard-react/static/media/team-4-800x800.99c612eb60728a5aeeb0.jpg" style={{ marginLeft:'-250px',maxWidth: '20%', marginBottom: '-100px' }} />

     <CardText className="card-content" style={{ fontSize: '16px', color: '#888', transition: 'color 0.3s ease' }}>
     <h4 style={{ color: '#172b4d' }}>Type d'apprenant: Technicien réseau</h4>
     <p style={{ color: '#172b4d' }}>Nom et prénom: Jessica Jones</p>
     <p style={{ color: '#172b4d' }}>Nom de formation: Formation Complète Python 2023 - de 0 à Expert</p>
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
    <Button color="primary" onClick={() => history.push('./Cours')}>Consulter mes cours</Button>
    <Button color="success" onClick={() => history.push('./Exercices')} style={{ marginLeft: '10px' }}>Mes exercices</Button>
  </div>
     
     </CardText>
   </CardBody>
 </Card>

</div>



   
    
      
     
      
      
      </>
    );
  
  
  };
  export default Apprenant;