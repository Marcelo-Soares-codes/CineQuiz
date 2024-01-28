// Quiz.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { QuizCard } from '../../components/QuizCard';
import { useQuizContext } from '../../context/QuizContext';
import { DataQuestionsProcessing } from '../../services/dataProcessing/index';

const Quiz = () => {
  const { questionData } = useQuizContext();
  const { newDataQuestions } = DataQuestionsProcessing(questionData);
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswerClick = (answer) => {
    // Salvar resposta no estado
    setAnswers([
      ...answers,
      {
        question: newDataQuestions[currentQuestionIndex].question,
        selectedAnswer: answer,
        correctAnswer: newDataQuestions[currentQuestionIndex].correctAnswer,
        isCorrect: answer === newDataQuestions[currentQuestionIndex].correctAnswer,
      },
    ]);

    // Avançar para a próxima pergunta
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    // Verificar se todas as perguntas foram respondidas
    if (currentQuestionIndex === newDataQuestions.length) {
      // Salvar respostas no localStorage
      localStorage.setItem('quizAnswers', JSON.stringify(answers));

      // Redirecionar para /results
      navigate('/results');
    }
  }, [currentQuestionIndex, newDataQuestions, answers, navigate]);

  return (
    <div className="containerQuiz">
      {newDataQuestions && currentQuestionIndex < newDataQuestions.length ? (
        <div className="quiz-card">
          <QuizCard
            key={newDataQuestions[currentQuestionIndex].id}
            question={newDataQuestions[currentQuestionIndex].question}
            category={newDataQuestions[currentQuestionIndex].category}
            difficulty={newDataQuestions[currentQuestionIndex].difficulty}
            alternatives={newDataQuestions[currentQuestionIndex].alternatives}
            onAnswerClick={handleAnswerClick}
          />
        </div>
      ) : (
        <h1 className="loading-message">Carregando...</h1>
      )}
    </div>
  );
};

export default Quiz;
