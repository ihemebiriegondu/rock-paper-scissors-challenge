import React, { useEffect } from "react";
import "../css/scoreboard.css";

export default function Scoreboard({ score, winner, swipeScore }) {
  useEffect(() => {
    const scoreText = document.querySelector(".scoreText");
    if (swipeScore) {
      scoreText.classList.remove("slideIn");
      scoreText.classList.add("slideOut");

      setTimeout(() => {
        scoreText.classList.remove("slideOut");
        scoreText.classList.add("slideIn");
      }, 300);
    }
  }, [winner, swipeScore]);

  return (
    <header>
      <div className="options">
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissors</h2>
      </div>
      <div className="score">
        <p>score</p>
        <h1 className="scoreText">{score}</h1>
      </div>
    </header>
  );
}
