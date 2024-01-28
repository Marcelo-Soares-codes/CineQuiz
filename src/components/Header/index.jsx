import './style.css';

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="containerHeader">
      <h1>CineQuiz</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
