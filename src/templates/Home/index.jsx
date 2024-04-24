import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Header } from '../../components/Header';
import { useQuizContext } from '../../context/QuizContext';
import { processQuizData } from '../../services/dataProcessing';

/**
 * Renders the Home page of the CineQuiz application.
 *
 * Displays a "Start" button to navigate to the quiz when data is loaded.
 *
 * @returns {JSX.Element} The Home page component.
 */
function Home() {
  const { questionData, originalData } = useQuizContext(); // Destructure originalData

  if (!questionData) {
    // Show a loading indicator while waiting for data
    return (
      <div className="containerHome">
        <p>Loading...</p>
      </div>
    );
  }

  // Process data once it's available
  const processedData = processQuizData(originalData); // Rename `newDataQuestions` to `processedData`

  return (
    <div className="containerHome">
      <Header />
      <Link to="/quiz">
        <button className="buttonStart">Start Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
