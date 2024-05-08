// Results.jsx

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Results = () => {
  const [answers, setAnswers] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const highlightedCardRef = useRef(null);

  useEffect(() => {
    // Obter respostas salvas no localStorage
    const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    setAnswers(savedAnswers);
  }, []);

  const calculateAccuracyPercentage = () => {
    const totalQuestions = answers.length;
    const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
    const accuracyPercentage = (correctAnswers / totalQuestions) * 100;
    return accuracyPercentage.toFixed(2);
  };

  return (
    <div className="results-container">
      <h1>Quiz Results</h1>

      {answers.length > 0 ? (
        <div>
          <ul className="answers-list">
            {answers.map((answer, index) => {
              return (
                <li key={answer.question} className="answer-item">
                  <h2>Question {index + 1}</h2>
                  <p>{`Question: ${answer.question}`}</p>
                  <p>{`Chosen Answer: ${answer.selectedAnswer}`}</p>
                  <p>{`Right answer: ${answer.correctAnswer}`}</p>
                  <p>{`Result: ${answer.isCorrect ? 'Correct' : 'Incorrect'}`}</p>
                </li>
              );
            })}
          </ul>
          <div className="accuracy-info">
            <p>{`You got ${calculateAccuracyPercentage()}% of the questions correct.`}</p>
          </div>
        </div>
      ) : (
        <div className="">
          <p>No results available. Maybe you haven't taken the quiz yet.</p>
        </div>
      )}

      <Link to="/" className="back-link">
        Return to home page
      </Link>
    </div>
  );
};

export default Results;
