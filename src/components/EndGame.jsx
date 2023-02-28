const EndGame = (props) => {
  const { correct, totalNumberOfQuestions } = props;
  return (
    <div className='result'>
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
      <h2>
        You guessed {correct} out of {totalNumberOfQuestions} answers.
      </h2>
      <a href='/'>
        <button>Try again?</button>
      </a>
    </div>
  );
};

export default EndGame;
