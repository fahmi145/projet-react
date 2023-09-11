import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const formationsData = [
  {
    title: "Formation Compléte Python 2023_ de 0 à Expert",
    description:
      "Apprendre la programmation en partant de zéro, Obtenir des bases solides en python, Savoir créer des projets complets de A à Z (et pouvoir les partager avec le monde entier).",
    courses: [
      "Introduction à Python",
      "Les boucles en Python",
      "Les fonctions en Python"
    ],
    created_at: "2022-04-01",
    duration: "12 weeks"
  },
  {
    title: "Mobile App Development",
    description: "Learn to build native mobile apps for iOS and Android.",
    courses: [
      "Introduction to Mobile App Development",
      "Building User Interfaces",
      "Working with APIs"
    ],
    created_at: "2022-05-01",
    duration: "16 weeks"
  },
  // ... Ajoutez les autres formations ici
];

const CoursFormateur = () => {
  const [formations, setFormations] = useState(formationsData);
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const handleAddCourse = () => {
    {
      const updatedFormations = [...formations];
      updatedFormations[selectedFormation].courses.push({
        title: courseTitle,
        description: courseDescription
      });
      setFormations(updatedFormations);
      setCourseTitle("");
      setCourseDescription("");
    }
  };
  

  const handleDeleteCourse = (formationIndex, courseIndex) => {
    const updatedFormations = [...formations];
    updatedFormations[formationIndex].courses.splice(courseIndex, 1);
    setFormations(updatedFormations);
  };

  const handleEditCourse = (formationIndex, courseIndex) => {
    setSelectedFormation(formationIndex);
    const course = formations[formationIndex].courses[courseIndex];
    setCourseTitle(course.title);
    setCourseDescription(course.description);
  };

  return (
    <div>
      {formations.map((formation, formationIndex) => (
        <Card key={formationIndex}>
          <CardBody>
            <CardTitle>{formation.title}</CardTitle>
            <CardText>{formation.description}</CardText>
            <ul>
              {formation.courses.map((course, courseIndex) => (
                <li key={courseIndex}>{course}
                  {course.title} - {course.description}
                  <Button
                    color="danger"
                    onClick={() => handleDeleteCourse(formationIndex, courseIndex)}
                  >
                    Supprimer cours
                  </Button>
                  <Button
                    color="warning"
                    onClick={() => handleEditCourse(formationIndex, courseIndex)}
                  >
                    Modifier cours
                  </Button>
                </li>
              ))}
            </ul>
            <Button color="success" onClick={() => setSelectedFormation(formationIndex)}>
              Ajouter cours
            </Button>
          </CardBody>
        </Card>
      ))}

      {/* Formulaire pour ajouter un cours */}
      {selectedFormation !== null && (
        <div>
          <h3>Ajouter un cours</h3>
          <input
            type="text"
            placeholder="Titre du cours"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
          <textarea
            placeholder="Description du cours"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          ></textarea>
          <Button color="primary" onClick={handleAddCourse}>
            Terminé
          </Button>
        </div>
      )}
    </div>
  );
};

export default CoursFormateur;

     
