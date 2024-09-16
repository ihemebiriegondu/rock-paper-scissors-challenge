import React from "react";
import tringle from "./images/bg-triangle.svg";
import HandSigns from "./components/handSigns";

import "./css/original.css";

export default function Original({ options }) {
  return (
    <main className="originalSection">
      <section className="selectHand">
        <div>
          <img alt="handSign" src={tringle} className="triangleSvg" />
        </div>
        <div>
          {options.map((handSign) => (
            <HandSigns
              key={handSign.hand}
              location={"original"}
              hand={handSign.hand}
              handImg={handSign.handImg}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
