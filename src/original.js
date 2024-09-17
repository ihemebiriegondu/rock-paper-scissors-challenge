import React from "react";
import { useNavigate } from "react-router-dom";

import tringle from "./images/bg-triangle.svg";
import HandSigns from "./components/handSigns";

import "./css/original.css";

export default function Original({ options, setUserPick, setHousePick }) {
  const navigate = useNavigate();

  const getHousePickFunction = () => {
    const justSigns = [];
    for (let i = 0; i < options.length; i++) {
      justSigns.push(options[i].hand);
    }
    const randomIndex = Math.floor(Math.random() * 3);
    setHousePick(justSigns[randomIndex]);

    sessionStorage.setItem("housePick", justSigns[randomIndex]);
  };

  const getUserPickFunction = (e) => {
    const target = e.target;
    const usersHand = target.getAttribute("data-hand");
    setUserPick(usersHand);
    getHousePickFunction();
    navigate("/step1");

    sessionStorage.setItem("userPick", usersHand);
  };

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
              getUserPick={getUserPickFunction}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
