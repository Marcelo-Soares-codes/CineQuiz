import React, { createContext, useContext, useEffect, useState } from 'react';
import { RequestQuestion } from '../services/requestQuestions'; // Assuming this is a separate file

const QuizContext = createContext();

/**
 * Hook to access the context values provided by QuizProvider.
 *
 * @returns {object} An object containing the current quiz data (`questionData`).
 */
export const useQuizContext = () => {
  return useContext(QuizContext);
};

/**
 * Context provider component for managing quiz data in the application.
 *
 * Fetches quiz data using `RequestQuestion` service and provides it to child components.
 *
 * @param {object} children - React children components to consume the context.
 *
 * @returns {JSX.Element} The QuizContext.Provider component.
 */
export const QuizProvider = ({ children }) => {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RequestQuestion();
        setQuestionData(response);
      } catch (error) {
        console.error('Error fetching quiz data:', error); // Use a more descriptive error message
      }
    };

    fetchData();
  }, []);

  return <QuizContext.Provider value={{ questionData }}>{children}</QuizContext.Provider>;
};
