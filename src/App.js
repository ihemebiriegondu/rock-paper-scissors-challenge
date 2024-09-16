import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Scoreboard from "./components/scoreboard";
import Buttons from "./components/buttons";
import Attributions from "./components/attributions";

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
  const [userPick, setUserPick] = useState("scissors");
  const [housePick, setHousePick] = useState("");

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
      <Scoreboard />
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
                setHousePick={setHousePick}
              />
            }
          />

          <Route
            path="/decision"
            element={
              <Decision
                options={
                  gameType === "original" ? originalHandSigns : handSigns
                }
                userPick={userPick}
                housePick={housePick}
              />
            }
          />
        </Routes>
      </BrowserRouter>

      <Buttons type={"rules"} text={"rules"} />
      <Attributions />
    </div>
  );
}

export default App;
