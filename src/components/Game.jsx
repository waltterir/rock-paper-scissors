import { useState } from "react";

function Game() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState();
  const [gameResult, setGameResult] = useState();

  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const random = choices[Math.floor(Math.random() * choices.length)];

  function handleClick(choices) {
    setPlayerChoice(choices);
    setComputerChoice(random);
  }

  return (
    <div>
      <div className="header">
        <h1>Rock Paper Scissors Game</h1>
      </div>
      <div>
        <div className="buttons">
          <button className="rock-btn" onClick={() => handleClick("ROCK")}>
            Rock
          </button>
          <button className="paper-btn" onClick={() => handleClick("PAPER")}>
            Paper
          </button>
          <button
            className="scissors-btn"
            onClick={() => handleClick("SCISSORS")}
          >
            Scissors
          </button>
        </div>
        <div className="choices">
          <h4>Your choice: {playerChoice}</h4>
          <h4>Computer choice: {computerChoice}</h4>
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
