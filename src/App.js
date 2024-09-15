import { useState } from "react";
import Attributions from "./components/attributions";
import Buttons from "./components/buttons";
import Scoreboard from "./components/scoreboard";
import Original from "./original";
import Bonus from "./bonus";

function App() {
  const [gameType, setGameType] = useState('original')

  return (
    <div className="App">
      <Scoreboard />
      {
        gameType === 'original' ? <Original /> : <Bonus />
      }
      
      <Buttons />
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
