import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
  

const GererFormations=() =>{
    const [formations,setFormations] = useState ([
      {
        id:1,
      title: "Formation Compléte Python 2023_ de 0 à Expert",
      description: "Apprendre la programmation en partant de zéro, Obtenir des bases solides en python, Savoir créer des projets complets de A à Z (et pouvoir les partager avec le monde entier).",
      image_url: "https://img-c.udemycdn.com/course/240x135/2281794_46a6_36.jpg",
      
      created_at: "2022-04-01",
      duration: "12 weeks",
    },
    {
      id:2,
      title: "Mobile App Development",
      description: "Learn to build native mobile apps for iOS and Android.",
      image_url:
        "https://th.bing.com/th/id/OIP.wnC1IgmnbSkaKj0vHM73pAHaG-?w=173&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;pid=1.7",
      price: 149.99,
      created_at: "2022-05-01",
      duration: "16 weeks",
    },
    {
      id:3,
      title: "Data Science Fundamentals",
      description: "Learn the basics of data science and machine learning.",
      image_url:
      "https://img-c.udemycdn.com/course/240x135/1941726_73cc_5.jpg",
      price: 79.99,
      created_at: "2022-06-01",
      duration: "8 weeks",
    },
    {
      id:4,
      title: "JavaScript:la formation ULTIME",
      description: "Maitrisez JavaScript grace au cours le plus complet sur internet! Projets,exercices,quiz,ES8 et bien D'autre!.",
      image_url:
      "https://img-c.udemycdn.com/course/240x135/3613504_e0e9_2.jpg",
      price: 79.99,
      created_at: "2022-06-01",
      duration: "8 weeks",
    },
    {
      id:5,
      title: "Migration de bases de données vers AWS ",
      description: "Obtenir les connaissances nécessaires pour accueillir vos bases de données relationnelles dans le cloud AWS.",
      image_url:
      "data:image/jpeg;base64,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",
      price: 69.99,
      created_at: "2022-06-01",
      duration: "8 weeks",
    },
    {
      id:6,
      title: "Certification Cybersécurité : De Débutant à Expert 2023",
      description: "Learn the basics of data science and machine learning.",
      image_url:
      "https://img-c.udemycdn.com/course/240x135/3654420_6ef3_8.jpg",
      
      created_at: "2022-06-01",
      duration: "8 weeks",
    },
    

      ]);
      const [showForm, setShowForm] = useState(false);
      const [newFormation, setNewFormation] = useState({
        id: "",
        title: "",
        description: "",
        image_url: "",
        created_at: "",
        duration: "",
        type:"",
      });
     
        const handleInputChange = (event) => {
        const { name, value,type,checked } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        setNewFormation((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const addFormation = () => {
        setFormations((prevState) => [...prevState, newFormation]);
        setShowForm(false);
        setNewFormation({
          id:"",
            title: "",
          description: "",
          image_url: "",
          created_at: "",
          duration: "",
          type:"",
        });
      };
    
      const deleteFormation = (id) => {
        const updatedFormations = formations.filter((formation) => formation.id !== id);
    setFormations(updatedFormations);
      };
      const editFormation = (id) => {
        const formationToEdit = formations.find((formation) => formation.id === id);
        const { title, description, image_url, created_at, duration,type } = formationToEdit;
        setNewFormation({
          id,
          title,
          description,
          image_url,
          created_at,
          duration,
          type,
        });
        setShowForm(true);
      };
      
  const updateFormation = () => {
    const updatedFormations = formations.map((formation) =>
      formation.id === newFormation.id ? { ...newFormation } : formation
    );
    setFormations(updatedFormations);
    setNewFormation({
      id: "",
      title: "",
      description: "",
      image_url: "",
      created_at: "",
      duration: "",
      type:"",
    });
    setShowForm(false);
  };
    
    
    
    
    
    
    
    
    return (
        <div>
        
      {showForm && (
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label for="title">Titre</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={newFormation.title}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  value={newFormation.description}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
              <Label for="image_url">URL de l'image</Label>
              <Input
                type="text"
                name="image_url"
                id="image_url"
                value={newFormation.image_url}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="created_at">Date de création</Label>
              <Input
                type="text"
                name="created_at"
                id="created_at"
                value={newFormation.created_at}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="duration">Durée</Label>
              <Input
                type="text"
                name="duration"
                id="duration"
                value={newFormation.duration}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
            <Label for="type">Type de formation</Label>
            <div>
              <Label check style={{ marginRight: "25px" }}>
                <Input
                  type="checkbox"
                  name="type"
                  value="course"
                  checked={newFormation.type === "course"}
                  onChange={handleInputChange}
                  style={{ marginRight: "15px" }}
                />{" "}
                Cours
              </Label>
             
              <Label check >
                <Input
                  type="checkbox"
                  name="type"
                  value="exercise"
                  checked={newFormation.type === "exercise"}
                  onChange={handleInputChange}
                  style={{ marginRight: "15px" }}
                />{" "}
                Exercice
              </Label>
            </div>
          </FormGroup>
            {newFormation.id ? (
              <Button onClick={updateFormation}>Terminer</Button>
            ) : (
              <Button onClick={addFormation}>Ajouter</Button>
            )}
            <Button onClick={() => setShowForm(false)}>Annuler</Button>
          </Form>
        </Col>
      </Row>
    )}
    <Row>
      {formations.map((formation) => (
        <Col sm="6" md="4" lg="3" key={formation.id}>
          <Card>
            <CardBody>
              <CardTitle>{formation.title}</CardTitle>
              <CardText>{formation.description}</CardText>
              <img src={formation.image_url} alt={formation.title} />
              <div>Créé le: {formation.created_at}</div>
              <div>Durée: {formation.duration}</div>
              <Button color="primary" onClick={() => editFormation(formation.id)}>Modifier formation</Button>
              <Button color="secondary" onClick={() => deleteFormation(formation.id)}>Supprimer formation</Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
    <Button  style={{ width: '300px', display:'flex', justifyContent:'center',alignItems:'center' }} color="success" onClick={() => setShowForm(true)}>Ajouter formation

    </Button>

        
        </div>
    );
}

export default GererFormations;