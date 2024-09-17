import React from "react";
import { useNavigate } from "react-router-dom";

import Buttons from "../components/buttons";
import HandSigns from "../components/handSigns";

import "../css/decision.css";

export default function Decision({ options, userPick, housePick, winner }) {
  const navigate = useNavigate();

  const userImg =
    userPick === ""
      ? ""
      : options.find((option) => option.hand === userPick).handImg;
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
          <h1>
            {winner === "user"
              ? "you win"
              : winner === "house"
              ? "you lose"
              : "draw"}
          </h1>
          <Buttons
            type={"playAgain"}
            text={"play again"}
            clickFunction={() => {
              navigate("/");
            }}
          />
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
