import React, { useState } from "react";

const CoursFormateur = () => {
  const [formationsData, setFormationsData] = useState([
    {
      title: "Formation Compléte Python 2023_ de 0 à Expert",
      description:
        "Apprendre la programmation en partant de zéro, Obtenir des bases solides en python, Savoir créer des projets complets de A à Z (et pouvoir les partager avec le monde entier).",
      courses: [
        {
          title: "Introduction à Python",
          exercises: ["Exercice 1", "Exercice 2", "Exercice 3"],
        },
        {
          title: "Les boucles en Python",
          exercises: ["Exercice 1", "Exercice 2", "Exercice 3"],
        },
        {
          title: "Les fonctions en Python",
          exercises: ["Exercice 1", "Exercice 2", "Exercice 3"],
        },
      ],
      created_at: "2022-04-01",
      duration: "12 weeks",
    },
    // ... Ajoutez les autres formations ici
  ]);

  const handleAddExercise = (formationIndex, courseIndex) => {
    const updatedFormations = [...formationsData];
    updatedFormations[formationIndex].courses[courseIndex].exercises.push(
      `Nouvel exercice ${updatedFormations[formationIndex].courses[courseIndex].exercises.length + 1}`
    );
    setFormationsData(updatedFormations);
  };

  const handleEditExercise = (formationIndex, courseIndex, exerciseIndex, newExerciseTitle) => {
    const updatedFormations = [...formationsData];
    updatedFormations[formationIndex].courses[courseIndex].exercises[exerciseIndex] = newExerciseTitle;
    setFormationsData(updatedFormations);
  };

  const handleDeleteExercise = (formationIndex, courseIndex, exerciseIndex) => {
    const updatedFormations = [...formationsData];
    updatedFormations[formationIndex].courses[courseIndex].exercises.splice(exerciseIndex, 1);
    setFormationsData(updatedFormations);
  };

  const listItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  };

  const buttonStyle = {
    marginLeft: "10px",
    background: "#4CAF50",
    border: "none",
    color: "white",
    padding: "8px 16px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "14px",
    margin: "4px 2px",
    cursor: "pointer",
    transition: "transform 0.3s",
    transformOrigin: "center",
  };

  return (
    <div>
      {formationsData.map((formation, formationIndex) => (
        <div key={formationIndex}>
          <h3>{formation.title}</h3>
          <p>{formation.description}</p>
          {formation.courses.map((course, courseIndex) => (
            <div key={courseIndex}>
              <h4>{course.title}</h4>
              <ul>
                {course.exercises.map((exercise, exerciseIndex) => (
                  <li key={exerciseIndex} style={listItemStyle}>
                    {exercise}
                    <button
                      style={buttonStyle}
                      onClick={() =>
                        handleEditExercise(
                          formationIndex,
                          courseIndex,
                          exerciseIndex,
                          prompt("Nouveau titre de l'exercice")
                        )
                      }
                    >
                      Modifier exercice
                    </button>
                    <button
                      style={buttonStyle}
                      onClick={() => handleDeleteExercise(formationIndex, courseIndex, exerciseIndex)}
                    >
                      Supprimer exercice
                    </button>
                  </li>
                ))}
              </ul>
              
<button style={buttonStyle} onClick={() => handleAddExercise(formationIndex, courseIndex)}>
Ajouter exercice
</button>
</div>
))}
</div>
))}
</div>
);
};

export default CoursFormateur;
