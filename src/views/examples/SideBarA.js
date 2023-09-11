import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';




function SideBarA() {
    const [selectedOption, setSelectedOption] = useState('null');
   
    
    

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    }
    
  
    return (
      
      <div className="sidebara">
        <ul>
        
          <li onClick={() => handleOptionClick('profile')} className={selectedOption === 'profile' ? 'active' : ''}>
            Profile
          </li>
          
          
          <a href="http://localhost:3001/custom/cours">
           <li onClick={() => handleOptionClick('cours')} className={selectedOption === 'cours' ? 'active' : ''}>
           Mes Cours
          </li>
          </a>
          <a href="http://localhost:3001/custom/exercices">
          <li onClick={() => handleOptionClick('exercices')} className={selectedOption === 'exercices' ? 'active' : ''}>
            Mes Exercices
          </li>
          
          </a>
          <a href="http://localhost:3001/custom/messages">
          <li onClick={() => handleOptionClick('messages')} className={selectedOption === 'messages' ? 'active' : ''}>
            Messages
          </li>
          
          </a>
        </ul>
       
    
        
        <style jsx>{`
        .sidebara {
          background-color: #8898aa;
          padding: 10px;
          width: 200px;
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
  )
};

export default SideBarA;