import axios from 'axios';

const baseUrl = 'https://the-trivia-api.com/v2/questions/';

/**
 * Fetches quiz questions from the Trivia API.
 *
 * @returns {Promise<object>} A promise resolving to an array of quiz question objects.
 */
export const fetchQuizQuestions = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    throw error; // Rethrow the error for handling in the calling component
  }
};
