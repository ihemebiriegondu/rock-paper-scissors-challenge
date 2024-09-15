import Attributions from "./components/attributions";
import Buttons from "./components/buttons";
import Scoreboard from "./components/scoreboard";
import Original from "./original";

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Original />
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
