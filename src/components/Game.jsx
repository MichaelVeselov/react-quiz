import { useState } from 'react';

import prepareQuestion from '../helpers/prepareQuestion';

import PlayQuestion from './PlayQuestion';
import EndGame from './EndGame';

const Game = (props) => {
  const { questions } = props;

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const currentQuestion = questions[step] && prepareQuestion(questions[step]);

  const totalNumberOfQuestions = questions.length;

  const handleClick = (index) => {
    setStep((step) => step + 1);

    if (index === currentQuestion.correct) {
      setCorrect((correct) => correct + 1);
    }
  };

  return (
    <>
      {step !== totalNumberOfQuestions ? (
        <PlayQuestion
          step={step}
          currentQuestion={currentQuestion}
          totalNumberOfQuestions={totalNumberOfQuestions}
          handleClick={handleClick}
        />
      ) : (
        <EndGame correct={correct} totalNumberOfQuestions={totalNumberOfQuestions} />
      )}
    </>
  );
};

export default Game;
