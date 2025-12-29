import { useState, useEffect } from "react";

function Game() {
  const [playerChoice, setPlayerChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [score, setScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerWin, setPlayerWin] = useState("");

  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * 3)];

  function handleClick(choices) {
    setPlayerChoice(choices);
    setComputerChoice(random);
  }

  const Result = () => {
    console.log("result called");
    if (playerChoice === "rock" && computerChoice === "scissors") {
      setScore((prev) => prev + 1);
      setPlayerWin("win");
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      setPlayerWin("lose");
      setComputerScore((prev) => prev + 1);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      setPlayerWin("lose");
      setComputerScore((prev) => prev + 1);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      setScore((prev) => prev + 1);
      setPlayerWin("win");
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      setPlayerWin("lose");
      setComputerScore((prev) => prev + 1);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      setScore((prev) => prev + 1);
      setPlayerWin("win");
    } else setPlayerWin("draw");
  };

  useEffect(() => {
    if (playerChoice && computerChoice) {
      Result();
    }
  }, [playerChoice, computerChoice]);

  return (
    <div>
      <div className="header">
        <h1>Rock Paper Scissors Game</h1>
      </div>
      <div>
        <div className="buttons">
          <button className="rock-btn" onClick={() => handleClick("rock")}>
            Rock
          </button>
          <button className="paper-btn" onClick={() => handleClick("paper")}>
            Paper
          </button>
          <button
            className="scissors-btn"
            onClick={() => handleClick("scissors")}
          >
            Scissors
          </button>
        </div>
        <div className="choices">
          <h4>Your choice: {playerChoice}</h4>
          <h4>Computer choice: {computerChoice}</h4>
          <h3>{playerWin}</h3>
        </div>
        <div className="scores">
          <h2>Your score: {score}</h2>
          <h2>Computer score: {computerScore}</h2>
        </div>
      </div>
    </div>
  );
}

export default Game;
