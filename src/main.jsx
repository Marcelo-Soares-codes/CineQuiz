import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './templates/Home/index';
import Quiz from './templates/Quiz/index';
import Results from './templates/Results/index';

import { Header } from './components/Header';
import { QuizProvider } from './context/QuizContext';

import './styles/reset.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </QuizProvider>
    </Router>
  </React.StrictMode>,
);
