import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Results = () => {
  const [userAnswers, setUserAnswers] = useState([]); // More descriptive name
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const highlightedCardRef = useRef(null);

  useEffect(() => {
    // Retrieve saved answers from localStorage
    const storedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    setUserAnswers(storedAnswers);
  }, []);

  const calculateAccuracyPercentage = () => {
    const totalQuestions = userAnswers.length;
    const correctAnswers = userAnswers.filter((answer) => answer.isCorrect).length;
    const accuracyPercentage = (correctAnswers / totalQuestions) * 100;
    return accuracyPercentage.toFixed(2);
  };

  return (
    <div className="results-container">
      <h1>Quiz Results</h1>

      {userAnswers.length > 0 ? (
        <div>
          <ul className="answers-list">
<<<<<<< HEAD
            {userAnswers.map((answer, index) => (
              <li key={answer.question} className="answer-item">
                <h2>Question {index + 1}</h2>
                <p>Question: {answer.question}</p>
                <p>Your Answer: {answer.selectedAnswer}</p>
                <p>Correct Answer: {answer.correctAnswer}</p>
                <p>Result: {answer.isCorrect ? 'Correct' : 'Incorrect'}</p>
              </li>
            ))}
          </ul>
          <div className="accuracy-info">
            <p>You answered {calculateAccuracyPercentage()}% of questions correctly.</p>
          </div>
        </div>
      ) : (
        <p>No results available. Take the quiz to see your results!</p>
      )}

      <Link to="/" className="back-link">
        Return to Home Page
=======
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
>>>>>>> main
      </Link>
    </div>
  );
};

export default Results;
