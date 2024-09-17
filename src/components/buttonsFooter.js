import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./buttons";

import "../css/buttonsFooter.css";

export default function ButtonsFooter({ setShowRules, gameType, setGameType }) {
  const navigate = useNavigate();

  return (
    <section className="buttonFooter">
      <Buttons
        type={"rules"}
        text={gameType === "original" ? "bonus" : "original"}
        direction={'left'}
        clickFunction={() => {
          navigate("/");
          gameType === "original"
            ? setGameType("bonus")
            : setGameType("original");
        }}
      />

      <Buttons
        type={"rules"}
        text={"rules"}
        direction={'right'}
        clickFunction={() => setShowRules(true)}
      />
    </section>
  );
}
