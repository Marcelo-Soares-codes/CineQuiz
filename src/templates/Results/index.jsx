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
      <h1>Resultados do Quiz</h1>

      {answers.length > 0 ? (
        <div>
          <ul className="answers-list">
            {answers.map((answer, index) => {
              return (
                <li key={answer.question} className="answer-item">
                  <h2>Question {index + 1}</h2>
                  <p>{`Pergunta: ${answer.question}`}</p>
                  <p>{`Resposta Escolhida: ${answer.selectedAnswer}`}</p>
                  <p>{`Resposta Correta: ${answer.correctAnswer}`}</p>
                  <p>{`Resultado: ${answer.isCorrect ? 'Correta' : 'Incorreta'}`}</p>
                </li>
              );
            })}
          </ul>
          <div className="accuracy-info">
            <p>{`Você acertou ${calculateAccuracyPercentage()}% das perguntas.`}</p>
          </div>
        </div>
      ) : (
        <p>Nenhum resultado disponível. Talvez você ainda não tenha feito o quiz.</p>
      )}

      <Link to="/" className="back-link">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default Results;
