// Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import './styles.css';
import { Header } from '../../components/Header';
import { useQuizContext } from '../../context/QuizContext';
import { DataQuestionsProcessing } from '../../services/dataProcessing';

function Home() {
  const { questionData } = useQuizContext();

  if (!questionData) {
    // Se questionData ainda não está definido (assíncrono), você pode mostrar um indicador de carregamento ou retornar null
    return (
      <div className="containerHome">
        <p>Carregando...</p>
      </div>
    );
  }

  // Agora, questionData está definido e você pode usá-lo sem problemas
  return (
    <div className="containerHome">
      <Link to="/quiz">
        <button className="buttonStart">Start</button>
      </Link>
    </div>
  );
}

export default Home;
