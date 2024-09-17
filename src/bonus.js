import React from "react";
import { useNavigate } from "react-router-dom";

import pentagon from "./images/bg-pentagon.svg";
import HandSigns from "./components/handSigns";

import "./css/bonus.css";

export default function Bonus({ options, setUserPick, setHousePick }) {
  const navigate = useNavigate();

  const getHousePickFunction = () => {
    const justSigns = [];
    for (let i = 0; i < options.length; i++) {
      justSigns.push(options[i].hand);
    }
    const randomIndex = Math.floor(Math.random() * 5);
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
    <main className="bonusSection">
      <section className="selectHand">
        <div>
          <img alt="pentagon" src={pentagon} className="pentagonSvg" />
        </div>
        <div>
          {options.map((handSign) => (
            <HandSigns
              key={handSign.hand}
              location={"bonus"}
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
