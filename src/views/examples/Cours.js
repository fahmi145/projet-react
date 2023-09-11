import React, { useState } from 'react';
// Supposons que vous avez un tableau de formations dans ce fichier

function Cours() {
  const formations = [
    {
      nom: "Web Development Bootcamp",
      duree: "10 semaines",
      cours: [
        { nom: "Introduction to HTML", duree: "2 semaines" },
        { nom: "CSS Fundamentals", duree: "2 semaines" },
        { nom: "JavaScript Basics", duree: "3 semaines" },
        { nom: "Front-end Frameworks", duree: "3 semaines" }
      ]
    },
    {
      nom: "Artificial Intelligence and Machine Learning",
      duree: "12 semaines",
      cours: [
        { nom: "Introduction to Artificial Intelligence", duree: "2 semaines" },
        { nom: "Machine Learning Fundamentals", duree: "3 semaines" },
        { nom: "Deep Learning Techniques", duree: "4 semaines" },
        { nom: "AI Applications and Ethics", duree: "3 semaines" }
      ]
    },
    {
      nom: "Cybersecurity Fundamentals",
      duree: "8 semaines",
      cours: [
        { nom: "Introduction to Cybersecurity", duree: "2 semaines" },
        { nom: "Network Security", duree: "2 semaines" },
        { nom: "Secure Software Development", duree: "2 semaines" },
        { nom: "Incident Response and Forensics", duree: "2 semaines" }
      ]
    },
    {
      nom: "Mobile App Design",
      duree: "6 semaines",
      cours: [
        { nom: "User Experience (UX) Design", duree: "2 semaines" },
        { nom: "Mobile Interface Design", duree: "2 semaines" },
        { nom: "Interaction Design", duree: "1 semaine" },
        { nom: "Prototyping and Testing", duree: "1 semaine" }
      ]
    },
    {
      nom: "Data Analysis with Python",
      duree: "10 semaines",
      cours: [
        { nom: "Introduction to Python", duree: "2 semaines" },
        { nom: "Data Manipulation with Pandas", duree: "3 semaines" },
        { nom: "Data Visualization with Matplotlib and Seaborn", duree: "2 semaines" },
        { nom: "Machine Learning with scikit-learn", duree: "3 semaines" }
      ]
    }
  ];
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '6px 8px',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
  };
  const linkStyle = {
    textDecoration: 'underline',
    cursor: 'pointer',
  };


  const handleConsulter = (nomCours) => {
    console.log("Cliquez sur le bouton 'Consulter' pour le cours :", nomCours);
    // Ajoutez ici votre logique de traitement lorsque le bouton est cliqué
  };

  return (
    <div>
    {formations.map((formation, index) => (
      <div key={index}>
        <h2>{formation.nom}</h2>
        <p>Durée : {formation.duree}</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Nom du cours</th>
              <th style={thStyle}>Durée</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {formation.cours.map((cours, index) => (
              <tr key={index}>
                <td style={tdStyle}>
                <a
                style={linkStyle}
                onClick={() => handleConsulter(cours.nom)}
              >
                {cours.nom}
              </a>
            </td>
                <td style={tdStyle}>{cours.duree}</td>
                <td style={tdStyle}>
                <button
                  style={buttonStyle}
                  onClick={() => handleConsulter(cours.nom)}
                >
                  Consulter
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
    

  );

}

export default Cours;
