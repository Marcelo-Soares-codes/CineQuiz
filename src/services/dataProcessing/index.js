export const DataQuestionsProcessing = (dataQuestions) => {
  const newDataQuestions = [];

  if (!dataQuestions) {
    console.log('Ops, parece que não foi recebido nenhum dado!');
  } else {
    function removeDuplicates(array) {
      return Array.from(new Set(array));
    }

    const randomAlternatives = (alternatives, correct) => {
      //console.log('alternatives is:', alternatives, 'correct is:', correct);
      const randomIndex = Math.floor(Math.random() * (alternatives.length + 1));
      const newAlternatives = [...alternatives.slice(0, randomIndex), correct, ...alternatives.slice(randomIndex)];
      return removeDuplicates(newAlternatives);
    };

    try {
      dataQuestions.forEach((question, index) => {
        newDataQuestions.push({
          id: question.id,
          question: question.question.text,
          category: question.category,
          difficulty: question.difficulty,
          alternatives: randomAlternatives(question.incorrectAnswers, question.correctAnswer),
          correctAnswer: question.correctAnswer,
        });
      });
    } catch (error) {
      console.log('Parece que ocorreu um erro: ', error);
    }
  }

  return { newDataQuestions: newDataQuestions, dataQuestions: dataQuestions };
};
