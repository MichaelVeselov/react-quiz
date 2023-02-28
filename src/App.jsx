import './index.scss';

import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';

import getQuestions from './Service/quizService.js';

import Game from './components/Game';
import Button from './components/Button/Button';

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    getQuestions(5)
      .then((data) => {
        setQuestions(data);
      })
      .then(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const onClickStartButton = () => {
    setShowGame(true);
    setShowButton(false);
  };

  return (
    <div className='App'>
      {loading ? (
        <div className='loader'>
          <ColorRing
            visible={true}
            height='80'
            width='80'
            ariaLabel='blocks-loading'
            wrapperStyle={{}}
            wrapperClass='blocks-wrapper'
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : (
        showButton && <Button onClick={onClickStartButton}>🏁 Start quiz!</Button>
      )}
      {showGame && <Game questions={questions} />}
    </div>
  );
}

export default App;
