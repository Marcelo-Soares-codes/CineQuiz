// QuizContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import { RequestQuestion } from '../services/requestQuestions';

const QuizContext = createContext();

export const useQuizContext = () => {
  return useContext(QuizContext);
};

export const QuizProvider = ({ children }) => {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await RequestQuestion();
        setQuestionData(result);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, []);

  return <QuizContext.Provider value={{ questionData }}>{children}</QuizContext.Provider>;
};
