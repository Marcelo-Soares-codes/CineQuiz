// requestQuestions.js

import axios from 'axios';

const url = {
  baseUrl: 'https://the-trivia-api.com/v2/questions/',
};

export const RequestQuestion = async () => {
  try {
    const response = await axios.get(url.baseUrl);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error; // Lança o erro para que possa ser tratado no componente
  }
};
