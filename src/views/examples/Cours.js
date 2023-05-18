import React, { useState } from 'react';
// Supposons que vous avez un tableau de formations dans ce fichier

function Cours() {
  const [timetable, setTimetable] = useState([
    {
      week: 1,
      days: [
        { id: 1, day: 'Lundi', course: 'les bases du programation python', time: '10:00 - 12:00', support: 'texte' },
        { id: 2, day: 'Mardi', course:'les syntaxes du programation python' , time: '14:00 - 16:00', support: 'pdf' },
      ],
    },
    {
      week: 2,
      days: [
        { id: 3, day: 'Mercredi', course: 'les fonctions et les procedures dans python', time: '09:00 - 12:00', support: 'image' },
        { id: 4, day: 'Jeudi', course: 'les tableaux dans python', time: '13:00 - 15:00', support: 'video2d' },
       

    
    ],
    },
    {
        week: 3,
        days: [
            { id: 5, day: 'Vendredi', course: 'les interfaces dans python', time: '08:00 - 10:00', support: '3d' },
            { id: 6, day: 'Dimanche', course: 'les cursuers dans python', time: '10:00 - 12:00', support: '3d' },
        ],
      },
      {
        week: 4,
        days: [
            { id: 7, day: 'Mardi',course:'Team Project', time: '08:00 - 13:00' },
        ],
      },
      
      {
        week: 5,
        days: [
            { id: 8, day: 'Mercredi', course: 'Python avancé', time: '11:00 - 13:00', support: '3d' },
            { id: 9, day: 'Jeudi', course: 'Python pour les data scientists', time: '10:00 - 12:00', support: '3d' },

        ],
      },


  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (index) => {
    setSelectedCourse(index);
  };

  const handleSupportChange = (event, weekIndex, dayIndex) => {
    const selectedSupport = event.target.value;
    // Mettre à jour le support du cours sélectionné
    const updatedTimetable = [...timetable];
    updatedTimetable[weekIndex].days[dayIndex].support = selectedSupport;
    setTimetable(updatedTimetable);
  };
 

  return (
    <div>
      <h1>Emploi du temps</h1>
      {timetable.map((week, weekIndex) => (
        <div key={week.week}>
          <h2>Semaine {week.week}</h2>
          <table className="timetable">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Cours</th>
                <th>Heure</th>
                <th>Consulter Cours</th>
              </tr>
            </thead>
            <tbody>
              {week.days.map((day, dayIndex) => (
                <tr key={day.id}>
                  <td>{day.day}</td>
                  <td>{day.course}</td>
                  <td>{day.time}</td>
                  <td>
                    <button onClick={() => handleCourseClick(day.id)}>Consulter</button>
                    {selectedCourse === day.id && (
                      <select
                        value={day.support}
                        onChange={(event) => handleSupportChange(event, weekIndex, dayIndex)}
                      >
                        <option value="texte">Texte</option>
                        <option value="pdf">PDF</option>
                        <option value="image">Image</option>
                        <option value="video2d">Vidéo 2D</option>
                        <option value="3d">Vidéo 3D</option>
                        <option value="VR">VR</option>
                      </select>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <style jsx>{`
        .timetable {
          width: 100%;
          border-collapse: collapse;
        }

        .timetable th,
        .timetable td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ccc;
        }

        .timetable th {
          background-color: #f2f2f2;
        }

        .timetable td button {
          padding: 5px 10px;
          background-color:  #4caf50;
          color: #fff;
          border: none;
          cursor: pointer;
        }

        .timetable td select {
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
}

export default Cours;

