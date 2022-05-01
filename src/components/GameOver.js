import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3 style={{
        color: gameOver.guessedWord ? "green" : "red",
        fontFamily: "Inter, sans-serif",
      }}>
        {gameOver.guessedWord
          ? `You correctly guessed the Fordle`
          : "You failed to guess the word"}
      </h3>
      <h1 style={{
        fontFamily: "Inter, sans-serif",
      }}>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3 style={{
          fontFamily: "Inter, sans-serif",
        }}>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
