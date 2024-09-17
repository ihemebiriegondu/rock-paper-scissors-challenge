import React from "react";
import rulesOriginal from "../images/image-rules.svg";
import rulesBonus from "../images/image-rules-bonus.svg";
import closeIcon from "../images/icon-close.svg";

import "../css/rules.css";

export default function Rules({ gameType, visible, close }) {
  return (
    <section className={`rulesBackdrop ${!visible && "hidden"}`}>
      <div className="rulesSlideInContainer">
        <div className="rulesCard">
          <h2>rules</h2>
          {gameType === "original" ? (
            <img alt="rules" src={rulesOriginal} className="rulesImg" />
          ) : (
            <img alt="rules" src={rulesBonus} className="rulesImg" />
          )}
          <img
            alt="closeIcon"
            src={closeIcon}
            className="closeIcon"
            onClick={() => close(false)}
          />
        </div>
      </div>
    </section>
  );
}
