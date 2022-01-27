type HeaderProps = {
  currentScore: number;
  highScore: number;
  resetGame: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function Header({
  currentScore,
  highScore,
  resetGame,
}: HeaderProps) {
  return (
    <div className='header'>
      <div className='header-text'>
        <h1>Animal Memory Game</h1>
      </div>
      <div className='header-more'>
        <div className='score-container'>
          <p className='score-text'>
            Current Score: <span className='score'>{currentScore}</span>
          </p>
          <p className='score-text'>
            Best Score: <span className='score'>{highScore}</span>
          </p>
        </div>
        <button onClick={resetGame} className='reset-game-button'>
          Reset Game
        </button>
      </div>
    </div>
  );
}
