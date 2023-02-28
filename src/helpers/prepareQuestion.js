import randomInteger from './randomInteger';

function prepareQuestion(obj) {
  const { correctAnswer, incorrectAnswers } = obj;
  const random = randomInteger(1, 4);
  const answerOptions = [...incorrectAnswers.slice(0, random), correctAnswer, ...incorrectAnswers.slice(random)];
  return { text: obj.question, options: answerOptions, correct: random };
}

export default prepareQuestion;
