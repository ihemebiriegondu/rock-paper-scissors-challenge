import React from "react";
import HandSigns from "../components/handSigns";

import '../css/step2.css'

export default function FirstStep({ options, userPick, housePick }) {
  const userImg = options.find((option) => option.hand === userPick).handImg;
  const houseImg =
    housePick === ""
      ? ""
      : options.find((option) => option.hand === housePick).handImg;

  return (
    <main className="step2">
      <section className="step2Section">
        <div className="pickedOptions">
          <HandSigns location={"steps"} hand={userPick} handImg={userImg} />
          <p>You Picked</p>
        </div>
        <div className="pickedOptions">
          <HandSigns location={"steps"} hand={housePick} handImg={houseImg} />
          <p>The house Picked</p>
        </div>
      </section>
    </main>
  );
}
