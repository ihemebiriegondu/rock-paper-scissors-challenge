import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandSigns from "../components/handSigns";

import "../css/step1.css";

export default function FirstStep({
  options,
  userPick,
  housePick,
  setWinner,
  score,
  setScore,
  setSwipeScore
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
      if (b === "rock" || b === "spock") {
        return a;
      } else if (b === "scissors" || b === "lizard") {
        return b;
      }
    }
    if (a === "rock") {
      if (b === "scissors" || b === "lizard") {
        return a;
      } else if (b === "paper" || b === "spock") {
        return b;
      }
    }
    if (a === "scissors") {
      if (b === "paper" || b === "lizard") {
        return a;
      } else if (b === "rock" || b === "spock") {
        return b;
      }
    }
    if (a === "lizard") {
      if (b === "spock" || b === "paper") {
        return a;
      } else if (b === "rock" || b === "scissors") {
        return b;
      }
    }
    if (a === "spock") {
      if (b === "scissors" || b === "rock") {
        return a;
      } else if (b === "lizard" || b === "paper") {
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
        setSwipeScore(false)
        setTimeout(() => setScore(score), 300);
        sessionStorage.setItem("winner", "draw");
      } else {
        let winnerSign = logic(userPick, housePick);
        if (userPick === winnerSign) {
          setWinner("user");
          sessionStorage.setItem("winner", "user");
          setScore(score);
          setSwipeScore(true)
          setTimeout(() => setScore(score + 1), 300);
        } else {
          setWinner("house");
          sessionStorage.setItem("winner", "house");
          setScore(score);
          setSwipeScore(true)
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
  }, [housePick, userPick, setWinner, navigate, score, setScore, setSwipeScore]);

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
