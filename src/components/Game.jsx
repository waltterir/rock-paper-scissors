import { useState } from "react";

function Game() {
  const [playerChoice, setPlayerChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [score, setScore] = useState();
  const [gameResult, setGameResult] = useState();

  const choice = ["ROCK", "PAPER", "SCISSORS"];

  function handleClick() {
    alert("clicked");
  }

  return (
    <div>
      <div className="header">
        <h1>Rock Paper Scissors</h1>
      </div>
      <div>
        <div className="buttons">
          <button className="player-rock" onClick={handleClick}>
            Rock
          </button>
          <button className="player-paper" onClick={handleClick}>
            Paper
          </button>
          <button className="player-scissors" onClick={handleClick}>
            Scissors
          </button>
        </div>
        <div className="choices">
          <h3>Your choice: </h3>
          <h3>Computer choice: </h3>
        </div>
        <div className="scores">
          <h2>Your score: </h2>
          <h2>Computer score:</h2>
        </div>
      </div>
    </div>
  );
}

export default Game;
