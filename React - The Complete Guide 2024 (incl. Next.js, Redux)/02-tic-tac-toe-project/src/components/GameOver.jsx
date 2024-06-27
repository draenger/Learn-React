export default function GameOver({ winner, onPlayAgain }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{winner} wins!</p> : <p>It is a draw!</p>}
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
}
