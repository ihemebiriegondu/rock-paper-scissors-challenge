import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Scoreboard from "./components/scoreboard";
import Buttons from "./components/buttons";
import Attributions from "./components/attributions";
import Rules from "./components/rules";

import Original from "./original";
import Bonus from "./bonus";

import FirstStep from "./steps/step2";
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
  const [score, setScore] = useState(0);

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
      <Scoreboard score={score} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              gameType === "original" ? (
                <Original
                  options={originalHandSigns}
                  setGameType={setGameType}
                  setUserPick={setUserPick}
                  setHousePick={setHousePick}
                />
              ) : (
                <Bonus options={handSigns} setGameType={setGameType} />
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
      </BrowserRouter>

      <Buttons
        type={"rules"}
        text={"rules"}
        clickFunction={() => setShowRules(true)}
      />
      <Attributions />

      <Rules gameType={gameType} visible={showRules} close={setShowRules} />
    </div>
  );
}

export default App;
