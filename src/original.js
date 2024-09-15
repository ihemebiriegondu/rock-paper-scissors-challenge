import React from "react";
import tringle from "./images/bg-triangle.svg";
import HandSigns from "./components/handSigns";
import rockImg from "./images/icon-rock.svg";
import paperImg from "./images/icon-paper.svg";
import scissorsImg from "./images/icon-scissors.svg";

import "./css/original.css";

export default function Original() {
  const handSigns = [
    { hand: "rock", handImg: rockImg },
    { hand: "paper", handImg: paperImg },
    { hand: "scissors", handImg: scissorsImg },
  ];

  return (
    <main className="originalSection">
      <section className="selectHand">
        <div>
          <img alt="handSign" src={tringle} className="triangleSvg" />
        </div>
        <div>
          {handSigns.map((handSign) => (
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
