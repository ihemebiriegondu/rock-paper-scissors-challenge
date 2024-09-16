import React from "react";
import "../css/buttons.css";

export default function Buttons({ type, text }) {
  return (
    <div className={`buttonDiv ${type}`}>
      <button>{text}</button>
    </div>
  );
}
