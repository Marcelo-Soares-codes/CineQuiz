import React from 'react';
import './style.css';

export const QuizCard = ({ question, category, difficulty, alternatives, onAnswerClick }) => {
  return (
    <div className="containerQuizCard">
      <h1>{question}</h1>
      <p>Category: {category}</p>
      <p>Difficulty: {difficulty}</p>
      <div className="answers">
        {alternatives.map((result, index) => (
          <input key={index} type="button" value={result} onClick={() => onAnswerClick(result)} />
        ))}
      </div>
    </div>
  );
};
