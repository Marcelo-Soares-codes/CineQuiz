import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './templates/Home/index';
import Quiz from './templates/Quiz/index';
import Results from './templates/Results/index';

import { Header } from './components/Header';
import { QuizProvider } from './context/QuizContext';

import './styles/reset.css';
import './styles/index.css';

// Renderização do aplicativo
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Provedor de contexto do quiz */}
      <QuizProvider>
        {/* Cabeçalho do aplicativo */}
        <Header />
        {/* Rotas do aplicativo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </QuizProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
