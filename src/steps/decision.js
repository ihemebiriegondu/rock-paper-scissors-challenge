import React from "react";
import Buttons from "../components/buttons";

export default function Decision() {
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
      <section>
        <h1>You lose</h1>
        <Buttons />
      </section>
      <Buttons />
    </main>
  );
}
