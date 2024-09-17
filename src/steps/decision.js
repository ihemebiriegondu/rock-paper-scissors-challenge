import React from "react";
import Buttons from "../components/buttons";
import HandSigns from "../components/handSigns";

import "../css/decision.css";

export default function Decision({ options, userPick, housePick, winner }) {
  const userImg = options.find((option) => option.hand === userPick).handImg;
  const houseImg =
    housePick === ""
      ? ""
      : options.find((option) => option.hand === housePick).handImg;

  return (
    <main className="decision">
      <section className="decisionSection">
        <div className={`pickedOptions ${winner === "user" ? "winner" : ""}`}>
          <HandSigns location={"steps"} hand={userPick} handImg={userImg} />
          <p>You Picked</p>
          {winner === "user" && <div className="radialBg"></div>}
        </div>
        <div className="playAgainDiv">
          <h1>You win</h1>
          <Buttons type={"playAgain"} text={"play again"} />
        </div>
        <div className={`pickedOptions ${winner === "house" ? "winner" : ""}`}>
          <HandSigns location={"steps"} hand={housePick} handImg={houseImg} />
          <p>The house Picked</p>
          {winner === "house" && <div className="radialBg"></div>}
        </div>
      </section>
    </main>
  );
}
