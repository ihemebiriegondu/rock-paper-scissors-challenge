import React from "react";
import '../css/scoreboard.css'

export default function Scoreboard() {
  return (
    <header>
      <div className="options">
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissors</h2>
      </div>
      <div className="score">
        <p>score</p>
        <h1>12</h1>
      </div>
    </header>
  );
}
