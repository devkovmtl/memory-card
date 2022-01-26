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
    <div>
      <h1>Memory Match</h1>
      <p>Current Score {currentScore}</p>
      <p>Best Score {highScore}</p>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}
