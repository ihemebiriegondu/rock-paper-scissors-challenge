import React from "react";
import "../css/buttons.css";

export default function Buttons({ type, text, clickFunction, direction }) {
  return (
    <div className={`buttonDiv ${type} ${direction}`} onClick={clickFunction}>
      <button>{text}</button>
    </div>
  );
}
