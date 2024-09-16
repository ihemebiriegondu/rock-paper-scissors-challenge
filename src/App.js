import { useState } from "react";
import Attributions from "./components/attributions";
import Buttons from "./components/buttons";
import Scoreboard from "./components/scoreboard";
import Original from "./original";
import Bonus from "./bonus";
import FirstStep from "./steps/step2";

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
      {/*gameType === "original" ? (
        <Original options={originalHandSigns} />
      ) : (
        <Bonus options={handSigns} />
      )*/}
      <FirstStep
        options={gameType === "original" ? originalHandSigns : handSigns}
        userPick={userPick}
        housePick={housePick}
        setHousePick={setHousePick}
      />

      <Buttons type={"rules"} text={"rules"} />
      <Attributions />
      {/* Score
  Rules

  You Picked
  The House Picked

  You Win
  You Lose

  Play Again




  */}
    </div>
  );
}

export default App;
