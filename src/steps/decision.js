import React from "react";
import Buttons from "../components/buttons";
import HandSigns from "../components/handSigns";

export default function Decision({ options, userPick, housePick }) {
  const userImg = options.find((option) => option.hand === userPick).handImg;
  const houseImg =
    housePick === ""
      ? ""
      : options.find((option) => option.hand === housePick).handImg;

  return (
    <main className="decision">
      {/*from step2.js */}
      <section className="step2">
        <div className="step2Section">
          <div className="pickedOptions">
            <HandSigns location={"steps"} hand={userPick} handImg={userImg} />
            <p>You Picked</p>
          </div>
          <div className="pickedOptions">
            <HandSigns location={"steps"} hand={housePick} handImg={houseImg} />
            <p>The house Picked</p>
          </div>
        </div>
      </section>

      <section>
        <h1>You lose</h1>
        <Buttons />
      </section>
      <Buttons />
    </main>
  );
}
