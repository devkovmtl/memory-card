import React, { useState } from 'react';
import { Header, CardBoard } from './components';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const resetGame = (e: React.MouseEvent<HTMLElement>) => {
    document.location.reload();
  };

  return (
    <div className='main-app-container'>
      <Header
        currentScore={currentScore}
        highScore={highScore}
        resetGame={resetGame}
      />
      <CardBoard
        setCurrentScore={setCurrentScore}
        setHighScore={setHighScore}
        currentScore={currentScore}
        highScore={highScore}
      />
    </div>
  );
}

export default App;
