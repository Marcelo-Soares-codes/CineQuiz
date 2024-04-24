import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { QuizCard } from '../../components/QuizCard';
import { useQuizContext } from '../../context/QuizContext';
import { processQuizData } from '../../services/dataProcessing'; // Assuming this is the renamed function

const Quiz = () => {
  const { questionData, originalData } = useQuizContext();
  const navigate = useNavigate();

  const [processedData, setProcessedData] = useState(null); // Rename `newDataQuestions`
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // More descriptive name

  useEffect(() => {
    if (questionData && !processedData) {
      setProcessedData(processQuizData(originalData)); // Process data once available
    }
  }, [questionData, originalData, processedData, processQuizData]);

  const handleAnswerClick = (answer) => {
    setUserAnswers([
      ...userAnswers,
      {
        question: processedData[currentQuestionIndex].question,
        selectedAnswer: answer,
        correctAnswer: processedData[currentQuestionIndex].correctAnswer,
        isCorrect: answer === processedData[currentQuestionIndex].correctAnswer,
      },
    ]);

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (currentQuestionIndex === processedData?.length) {
      // Handle potential undefined processedData
      localStorage.setItem('quizAnswers', JSON.stringify(userAnswers));
      navigate('/results');
    }
  }, [currentQuestionIndex, processedData, userAnswers, navigate]);

  return (
    <div className="containerQuiz">
      {processedData && currentQuestionIndex < processedData.length ? (
        <div className="quiz-card">
          <QuizCard
            key={processedData[currentQuestionIndex].id}
            question={processedData[currentQuestionIndex].question}
            category={processedData[currentQuestionIndex].category}
            difficulty={processedData[currentQuestionIndex].difficulty}
            alternatives={processedData[currentQuestionIndex].alternatives}
            onAnswerClick={handleAnswerClick}
          />
        </div>
      ) : (
        <h1 className="loading-message">Loading...</h1>
      )}
    </div>
  );
};

export default Quiz;
