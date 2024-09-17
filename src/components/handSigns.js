import React from "react";
import "../css/handsigns.css";

export default function HandSigns({ hand, handImg, location, getUserPick }) {
  return (
    <div
      data-hand={hand}
      className={`handSigns ${location} ${hand} ${
        handImg === "" ? "noImg" : ""
      }`}
      onClick={getUserPick}
    >
      <div data-hand={hand} className="innerBg">
        <div data-hand={hand}>
          <img data-hand={hand} alt="handSign" src={handImg} />
        </div>
      </div>
    </div>
  );
}
