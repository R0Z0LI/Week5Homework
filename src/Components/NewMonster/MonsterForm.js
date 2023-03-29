import React, { useState } from "react";
import arrowLeft from "../../Icons/arrow-left.svg";
import arrowRight from "../../Icons/arrow-right.svg";
import air from "../../Icons/air.svg";
import earth from "../../Icons/earth.svg";
import fire from "../../Icons/fire.svg";
import water from "../../Icons/water.svg";
import strength from "../../Icons/attack.svg";
import defense from "../../Icons/defense.svg";
import "./MonsterForm.modul.css";

let typesID = 0;
const MonsterForm = (props) => {
  const types = [air, earth, fire, water];

  const [enteredName, setEnteredName] = useState("");
  const [enteredStregth, setEnteredStregth] = useState("");
  const [enteredDefense, setEnteredDefense] = useState("");

  const [typesArrow, setTypesArrow] = useState(types[typesID]);

  const [attackError, setAttackError] = useState("");
  const [defenseError, setDefenseError] = useState("");

  const nameChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const strengthChangedHandler = (event) => {
    if (event.target.value < 1) {
      setAttackError("Only accept number above 0");
    } else {
      setAttackError("");
      setEnteredStregth(event.target.value);
    }
  };
  const defenseChangedHandler = (event) => {
    if (event.target.value < 1) {
      setDefenseError("Only accept number above 0");
    } else {
      setDefenseError("");

      setEnteredDefense(event.target.value);
    }
  };
  const leftArrowPushedHandler = (event) => {
    console.log(event.targer);
    if (typesID === 0) {
      typesID = 4;
    }
    typesID -= 1;
    setTypesArrow(types[typesID]);
  };

  const rightArrowPushedHandler = () => {
    if (typesID === 3) {
      typesID = -1;
    }
    typesID += 1;
    setTypesArrow(types[typesID]);
  };

  const submitEventHandler = (event) => {
    event.preventDefault();
    const monsterData = {
      name: enteredName,
      strength: enteredStregth,
      defense: enteredDefense,
      type: typesArrow,
    };
    props.onSaveMonsterData(monsterData);
  };

  return (
    <form onSubmit={submitEventHandler}>
      <div className="new-monster">
        <img
          src={arrowLeft}
          alt="arrow-left"
          className="new-monster__arrow-button"
          onClick={leftArrowPushedHandler}
        />
        <img
          src={typesArrow}
          alt="elements"
          className="new-monster__elements"
        />
        <img
          src={arrowRight}
          alt="arrow-right"
          className="new-monster__arrow-button"
          onClick={rightArrowPushedHandler}
        />
        <div>
          <input
            type="text"
            className="new-monster__name"
            placeholder="Name"
            value={enteredName}
            required
            onChange={nameChangedHandler}
          />
          <div>
            <img
              src={strength}
              alt="strength"
              className="new-monster__attribute-icons"
            />
            <input
              type="number"
              className="new-monster__attributes"
              value={enteredStregth}
              required
              onChange={strengthChangedHandler}
            />
            {attackError && <p className="error">{attackError}</p>}
            <img
              src={defense}
              alt="defense"
              className="new-monster__attribute-icons"
            />
            <input
              type="number"
              className="new-monster__attributes"
              value={enteredDefense}
              required
              onChange={defenseChangedHandler}
            />
            {defenseError && <p className="error">{defenseError}</p>}
          </div>
          <input type="submit" />
        </div>
      </div>
    </form>
  );
};

export default MonsterForm;
