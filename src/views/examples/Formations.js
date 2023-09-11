import React, { useState } from "react";

const Formations = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleDetails = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };
  const [courses, setCourses] = useState([
    {
      title: "Formation Compléte Python 2023_ de 0 à Expert",
      description: "Apprendre la programmation en partant de zéro, Obtenir des bases solides en python,Savoir créer des projets complete de A à Z (et pouvoir les partager avec le monde entier).",
      image_url:
      "https://img-c.udemycdn.com/course/240x135/2281794_46a6_36.jpg",
      price: 34.99,
      created_at: "2022-04-01",
      duration: "12 weeks",
    },
    {
      title: "Mobile App Development",
      description: "Learn to build native mobile apps for iOS and Android.",
      image_url:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
      price: 149.99,
      created_at: "2022-05-01",
      duration: "16 weeks",
    },
    {
      title: "Data Science Fundamentals",
      description: "Learn the basics of data science and machine learning.",
      image_url:
      "https://img-c.udemycdn.com/course/240x135/1941726_73cc_5.jpg",
      price: 79.99,
      created_at: "2022-06-01",
      duration: "8 weeks",
    },
    {
      title: "JavaScript:la formation ULTIME",
      description: "Maitrisez JavaScript grace au cours le plus complet sur internet! Projets,exercices,quiz,ES8 et bien D'autre!.",
      image_url:
      "https://img-c.udemycdn.com/course/240x135/3613504_e0e9_2.jpg",
      price: 79.99,
      created_at: "2022-06-01",
      duration: "8 weeks",
    },
    {
      title: "Migration de bases de données vers AWS ",
      description: "Obtenir les connaissances nécessaires pour accueillir vos bases de données relationnelles dans le cloud AWS.",
      image_url:
      "https://img-c.udemycdn.com/course/480x270/2476770_548e_7.jpg",
      price: 69.99,
      created_at: "2022-06-01",
      duration: "8 weeks",
    },
    {
      title: "Certification Cybersécurité : De Débutant à Expert 2023",
      description: "Learn the basics of data science and machine learning.",
      image_url:
      "https://img-c.udemycdn.com/course/240x135/3654420_6ef3_8.jpg",
      price: 74.99,
      created_at: "2022-06-01",
      duration: "8 weeks",
    },
  ]);

  return (
    
    <div className="container">
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={course.title}>
            <div className="card">
              <img
                className="card-img-top"
                src={course.image_url}
                alt={course.title}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => toggleDetails(index)}
              />
              <div className="card-body" style={{ position: "relative" }}>
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                
                <p className="card-text">${course.price}</p>
                <a href="http://localhost:3001/auth/login" className="btn btn-primary">
                  Buy now
                </a>
                {activeIndex === index && (
                  <div
                    className="popover show"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "white",
                      zIndex: "1",
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="arrow"></div>
                    <h3 className="popover-header">{course.title}</h3>
                    <div className="popover-body">
                      <p style={{ marginBottom: "0.5rem" }}>
                        Created at: {course.created_at}
                      </p>
                      <p>Duration: {course.duration}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
   
   

    // <AuthFooter />
    
  );
};

export default Formations;