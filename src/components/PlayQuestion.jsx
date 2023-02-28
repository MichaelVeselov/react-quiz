const PlayQuestion = (props) => {
  const { step, currentQuestion, totalNumberOfQuestions, handleClick } = props;

  const progress = Math.round((step / totalNumberOfQuestions) * 100);

  return (
    <>
      <div className='progress'>
        <div style={{ width: `${progress}%` }} className='progress__inner'></div>
      </div>
      <h1>{currentQuestion.text}</h1>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li
            key={option}
            onClick={() => {
              handleClick(index);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlayQuestion;
