import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = { X: "Player 1", O: "Player 2" };

function derivedActivePlayer(gameTurns) {
  return gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
}

function derivedWinner(gameBoard, players) {
  let winner = undefined;

  WINNING_COMBINATIONS.forEach((combination) => {
    const firstSqareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSqareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSqareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSqareSymbol &&
      firstSqareSymbol === secondSqareSymbol &&
      firstSqareSymbol === thirdSqareSymbol
    ) {
      winner = players[firstSqareSymbol];
    }
  });

  return winner;
}

function derivedGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  });

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = derivedGameBoard(gameTurns);
  let currentPlayer = derivedActivePlayer(gameTurns);
  let winner = derivedWinner(gameBoard, players);
  let hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      let currentPlayer = derivedActivePlayer(prevGameTurns);

      let updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];
      return updatedGameTurns;
    });
  }

  function handlePlayAgain() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onPlayAgain={handlePlayAgain} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
