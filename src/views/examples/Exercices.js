import React, { useState,useEffect } from 'react';
import './Exercices.css' ;

const questions = [
  {
    question: 'Quel est le langage de programmation utilisé pour le développement Python ?',
    options: ['JavaScript', 'Python', 'Java', 'C++'],
    answer: 'Python'
  },
  {
    question: 'Quelle est la fonction utilisée pour afficher un message à l\'écran en Python ?',
    options: ['print()', 'console.log()', 'alert()', 'display()'],
    answer: 'print()'
  },
  {
    question: 'Quelle est la sortie de ce code ?\n\n```python\nx = [1, 2, 3]\nprint(x * 2)\n```',
    options: [
      '[1, 2, 3, 1, 2, 3]',
      '[2, 4, 6]',
      'Une erreur se produira',
      '[1, 1, 2, 2, 3, 3]'
    ],
    answer: '[1, 2, 3, 1, 2, 3]'
  },
  {
    question: 'Quelle est la différence entre les méthodes append() et extend() pour une liste en Python ?',
    options: [
      'La méthode append() permet d\'ajouter un seul élément à la liste, tandis que la méthode extend() permet d\'ajouter plusieurs éléments à la liste.',
      'La méthode append() ajoute un élément à la fin de la liste, tandis que la méthode extend() ajoute une liste à une autre liste.',
      'La méthode append() et la méthode extend() sont identiques et peuvent être utilisées de manière interchangeable.',
      'La méthode append() est utilisée pour supprimer un élément de la liste, tandis que la méthode extend() est utilisée pour ajouter un élément à la liste.'
    ],
    answer: 'La méthode append() ajoute un élément à la fin de la liste, tandis que la méthode extend() ajoute une liste à une autre liste.'
  },
  {
    question: 'Quelle est la sortie de ce code ?\n\n```python\nx = "Hello"\nprint(x[::-1])\n```',
    options: ['Hello', 'olleH', 'H', 'Une erreur se produira'],
    answer: 'olleH'
  },
  {
    question: 'Quelle est la différence entre une classe et une instance en Python ?',
    options: [
      'Une classe est un objet et une instance est une fonction.',
      'Une classe est une fonction et une instance est un objet.',
      'Une classe est un modèle pour créer des instances et une instance est un objet spécifique créé à partir de cette classe.',
      'Il n\'y a pas de différence entre une classe et une instance en Python.'
    ],
    answer: 'Une classe est un modèle pour créer des instances et une instance est un objet spécifique créé à partir de cette classe.'
  },
  {
    question: 'Quelle est la différence entre `__str__` et `__repr__` en Python ?',
    options: [
      '`__str__` renvoie une représentation lisible par l\'homme d\'un objet, tandis que `__repr__` renvoie une représentation non ambiguë de l\'objet.',
      '`__str__` renvoie une représentation non ambiguë de l\'objet, tandis que `__repr__` renvoie une représentation lisible par l\'homme d\'un objet.',
      'Il n\'y a pas de différence entre `__str__` et `__repr__` en Python.',
      'Ces méthodes n\'existent pas en Python.'
    ],
    answer: '`__str__` renvoie une représentation lisible par l\'homme d\'un objet, tandis que `__repr__` renvoie une représentation non ambiguë de l\'objet.'
  },
  {
    question: 'Quelle est la sortie de ce code Python : `print(2 ** 3 ** 2)` ?',
    options: ['64', '512', '18', '256'],
    answer: '512'
  },
];

const Exercices = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const[timer,setTimer] = useState(0) ;
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setShowScore(true);
  };
 
 
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Vous avez obtenu {score} point(s) sur {questions.length}.
        </div>
      ) : (
        <div className="question-section">
        <div className="timer">{timer} secondes écoulées</div>

          <div className="question-count">
            Question {currentQuestion + 1}/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {currentQuestion === questions.length - 1 ? (
            <button className="submit-button" onClick={handleFinishQuiz}>
              Terminer
            </button>
          ) : (
            <button className="next-button" onClick={handleNextQuestion}>
              Suivant
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Exercices;
