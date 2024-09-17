import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Scoreboard from "./components/scoreboard";
import Attributions from "./components/attributions";
import Rules from "./components/rules";
import ButtonsFooter from "./components/buttonsFooter";

import Original from "./original";
import Bonus from "./bonus";

import FirstStep from "./steps/step1";
import Decision from "./steps/decision";

import rockImg from "./images/icon-rock.svg";
import paperImg from "./images/icon-paper.svg";
import scissorsImg from "./images/icon-scissors.svg";
import lizardImg from "./images/icon-lizard.svg";
import spockImg from "./images/icon-spock.svg";

function App() {
  const [gameType, setGameType] = useState("original");
  const [showRules, setShowRules] = useState(false);

  const [userPick, setUserPick] = useState(
    sessionStorage.getItem("userPick") === null
      ? ""
      : sessionStorage.getItem("userPick")
  );
  const [housePick, setHousePick] = useState(
    sessionStorage.getItem("housePick") === null
      ? ""
      : sessionStorage.getItem("housePick")
  );

  const [winner, setWinner] = useState(
    sessionStorage.getItem("winner") === null
      ? ""
      : sessionStorage.getItem("winner")
  );

  const [score, setScore] = useState(
    sessionStorage.getItem("score") === null
      ? 0
      : sessionStorage.getItem("score")
  );
  const [swipeScore, setSwipeScore] = useState("false");

  const handSigns = [
    { hand: "rock", handImg: rockImg },
    { hand: "paper", handImg: paperImg },
    { hand: "scissors", handImg: scissorsImg },
    { hand: "lizard", handImg: lizardImg },
    { hand: "spock", handImg: spockImg },
  ];

  let originalHandSigns = handSigns.slice(0, 3);

  return (
    <div className="App">
      <Scoreboard score={score} winner={winner} swipeScore={swipeScore} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              gameType === "original" ? (
                <Original
                  options={originalHandSigns}
                  setUserPick={setUserPick}
                  setHousePick={setHousePick}
                />
              ) : (
                <Bonus
                  options={handSigns}
                  setUserPick={setUserPick}
                  setHousePick={setHousePick}
                />
              )
            }
          />

          <Route
            path="/step1"
            element={
              <FirstStep
                options={
                  gameType === "original" ? originalHandSigns : handSigns
                }
                userPick={userPick}
                housePick={housePick}
                setWinner={setWinner}
                score={score}
                setScore={setScore}
                setSwipeScore={setSwipeScore}
              />
            }
          />

          <Route
            path="/winner"
            element={
              <Decision
                options={
                  gameType === "original" ? originalHandSigns : handSigns
                }
                userPick={userPick}
                housePick={housePick}
                winner={winner}
              />
            }
          />
        </Routes>
        <ButtonsFooter
          setShowRules={setShowRules}
          gameType={gameType}
          setGameType={setGameType}
        />
      </BrowserRouter>

      <Attributions />

      <Rules gameType={gameType} visible={showRules} close={setShowRules} />
    </div>
  );
}

export default App;
