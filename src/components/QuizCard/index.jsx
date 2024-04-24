import React from 'react';
import './style.css';

/**
 * Renders a quiz card component with question, category, difficulty, and answer alternatives.
 *
 * Props:
 * - question (string): The quiz question to display.
 * - category (string): The category of the quiz question.
 * - difficulty (string): The difficulty level of the quiz question.
 * - alternatives (array<string>): An array of strings representing the answer alternatives.
 * - onAnswerClick (function(string)): Callback function triggered when an answer is clicked.
 *
 * @returns {JSX.Element} The quiz card component.
 */
export const QuizCard = ({ question, category, difficulty, alternatives, onAnswerClick }) => {
  return (
    <div className="containerQuizCard">
      <h1>{question}</h1>
      <p>Category: {category}</p>
      <p>Difficulty: {difficulty}</p>
      <div className="answers">
        {alternatives.map((alternative, index) => (
          <button key={index} type="button" value={alternative} onClick={() => onAnswerClick(alternative)}>
            {alternative}
          </button>
        ))}
      </div>
    </div>
  );
};
