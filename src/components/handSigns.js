import React from "react";
import "../css/handsigns.css";

export default function HandSigns({ hand, handImg, location }) {
  return (
    <div
      className={`handSigns ${location} ${hand} ${
        handImg === "" ? "noImg" : ""
      }`}
    >
      <div className="innerBg">
        <div>
          <img alt="handSign" src={handImg} />
        </div>
      </div>
    </div>
  );
}
