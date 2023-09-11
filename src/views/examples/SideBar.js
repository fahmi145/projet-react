import React, { useState } from 'react';

function Sidebar() {
  const [selectedOption, setSelectedOption] = useState('profile');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="sidebar">
      <ul>
         
        <li onClick={() => handleOptionClick('profile')} className={selectedOption === 'profile' ? 'active' : ''}>
          Profile
        </li>
        
        <li onClick={() => handleOptionClick('formations')} className={selectedOption === 'cours' ? 'active' : ''}>
         Gérer formations
        </li>
        <li onClick={() => handleOptionClick('cours')} className={selectedOption === 'exercices' ? 'active' : ''}>
          Gérer cours
        </li>
        <li onClick={() => handleOptionClick('exercices')} className={selectedOption === 'exercices' ? 'active' : ''}>
          Gérer exercice
        </li>
        <a href="http://localhost:3001/custom/tablees">
        <li onClick={() => handleOptionClick('liste')} className={selectedOption === 'LISTE' ? 'active' : ''}>
          liste Apprenant
        </li>
        </a>
      </ul>

      <style jsx>{`
        .sidebar {
          background-color: #8898aa;
          padding: 10px;
          width: 230px;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        li {
          font-size: 20px;
          padding: 10px;
          cursor: pointer;
          color: #555;
        }

        li:hover {
          background-color:  #f5f5f5;
        }

        .active {
          background-color: #f5f5f5;
          font-weight: bold;
        }
      `}</style>
      

    </div>
  );
}

export default Sidebar;