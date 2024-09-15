import React from "react";
import tringle from "./images/bg-triangle.svg";
import HandSigns from "./components/handSigns";
/*import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg"; */

export default function Original() {
  return (
    <main>
      <img alt="handSign" src={tringle} />
      <HandSigns />
    </main>
  );
}
