import React from "react";
import "../css/buttons.css";

export default function Buttons({ type, text, clickFunction }) {
  return (
    <div className={`buttonDiv ${type}`} onClick={clickFunction}>
      <button>{text}</button>
    </div>
  );
}
