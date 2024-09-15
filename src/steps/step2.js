import React from "react";
import HandSigns from "../components/handSigns";
import Buttons from "../components/buttons";

export default function FirstStep() {
  return (
    <main>
      <section>
        <div>
          <HandSigns />
          <p>You Picked</p>
        </div>
        <div>
          <HandSigns />
          <p>The house Picked</p>
        </div>
      </section>
      <Buttons />
    </main>
  );
}
