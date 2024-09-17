import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandSigns from "../components/handSigns";

import "../css/step2.css";

export default function FirstStep({
  options,
  userPick,
  housePick,
  setWinner,
  score,
  setScore,
}) {
  const navigate = useNavigate();

  const [delayedHousePick, setDelayedHousePick] = useState("");

  const userImg =
    userPick === ""
      ? ""
      : options.find((option) => option.hand === userPick).handImg;

  const houseImg =
    delayedHousePick === ""
      ? ""
      : options.find((option) => option.hand === delayedHousePick).handImg;

  const logic = (a, b) => {
    if (a === "paper") {
      if (b === "rock") {
        return a;
      } else if (b === "scissors") {
        return b;
      }
    }
    if (a === "rock") {
      if (b === "scissors") {
        return a;
      } else if (b === "paper") {
        return b;
      }
    }
    if (a === "scissors") {
      if (b === "paper") {
        return a;
      } else if (b === "rock") {
        return b;
      }
    }
  };

  useEffect(() => {
    setTimeout(() => setDelayedHousePick(housePick), 500);

    const selectWinnerFunction = () => {
      setWinner("");
      sessionStorage.setItem("winner", "");
      if (userPick === housePick) {
        setWinner("draw");
        setTimeout(() => setScore(score), 300);
        sessionStorage.setItem("winner", "draw");
      } else {
        let winnerSign = logic(userPick, housePick);
        if (userPick === winnerSign) {
          setWinner("user");
          sessionStorage.setItem("winner", "user");
          setScore(score);
          setTimeout(() => setScore(score + 1), 300);
        } else {
          setWinner("house");
          sessionStorage.setItem("winner", "house");
          setScore(score);
          if (score >= 1) {
            setTimeout(() => setScore(score - 1), 300);
          }
        }
      }

      navigate("/winner");
    };

    setTimeout(selectWinnerFunction, 1500);
    return () => {
      clearTimeout();
    };
  }, [housePick, userPick, setWinner, navigate, score, setScore]);

  return (
    <main className="step2">
      <section className="step2Section">
        <div className="pickedOptions">
          <HandSigns location={"steps"} hand={userPick} handImg={userImg} />
          <p>You Picked</p>
        </div>
        <div className="pickedOptions houseHand">
          <HandSigns location={"steps"} hand={housePick} handImg={houseImg} />
          <p>The house Picked</p>
        </div>
      </section>
    </main>
  );
}
