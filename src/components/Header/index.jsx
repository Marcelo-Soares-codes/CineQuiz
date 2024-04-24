import './style.css';
import { Link } from 'react-router-dom';

/**
 * Renders the header component for the CineQuiz application.
 *
 * Provides navigation links to Home, Quiz, and Results pages.
 *
 * @returns {JSX.Element} The header component.
 */
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
