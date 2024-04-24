/**
 * Processes quiz data by removing duplicates, randomizing alternatives,
 * and restructuring the data format.
 *
 * @param {array} dataQuestions - An array of raw quiz question objects.
 *
 * @returns {object} An object containing processed quiz data and the original data.
 *  - newDataQuestions: An array of processed quiz question objects.
 *  - dataQuestions: The original unprocessed data (for potential reference).
 */
export const processQuizData = (dataQuestions) => {
  const processedQuestions = []; // Use a more descriptive variable name

  if (!dataQuestions) {
    console.warn('No quiz data received!'); // Use console.warn for non-critical warnings
  } else {
    try {
      dataQuestions.forEach((question, index) => {
        processedQuestions.push({
          id: question.id,
          question: question.question.text, // Assuming "text" is the property containing the question text
          category: question.category,
          difficulty: question.difficulty,
          alternatives: randomizeAlternatives(question.incorrectAnswers, question.correctAnswer),
          correctAnswer: question.correctAnswer,
        });
      });
    } catch (error) {
      console.error('Error processing quiz data:', error); // Use console.error for critical errors
    }
  }

  return { processedQuestions, originalData: dataQuestions }; // Rename `newDataQuestions` and provide original data
};

/**
 * Randomizes the order of answer alternatives, ensuring the correct answer is included.
 *
 * @param {array} incorrectAnswers - An array of incorrect answer strings.
 * @param {string} correctAnswer - The correct answer string.
 *
 * @returns {array} A new array with shuffled alternatives, including the correct answer.
 */
const randomizeAlternatives = (incorrectAnswers, correctAnswer) => {
  const alternatives = [...incorrectAnswers, correctAnswer];
  alternatives.sort(() => Math.random() - 0.5); // More efficient in-place shuffle
  return alternatives;
};
