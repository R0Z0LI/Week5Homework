import React from "react";

import "./MonsterItem.css";

import air from "../../Icons/air.svg";
import earth from "../../Icons/earth.svg";
import fire from "../../Icons/fire.svg";
import water from "../../Icons/water.svg";
import strength from "../../Icons/attack.svg";
import defense from "../../Icons/defense.svg";

const MonsterItem = (props) => {
  const types = [air, earth, fire, water];
  const image = types[props.type];
  return (
    <li className="monster__list">
      <img src={image} alt="elements" className="type" />
      <div className="monster">
        <p className="monster__name">{props.name}</p>
        <div>
          <div className="monster__attributes">
            <img src={strength} alt="elements" className="icon" />
            <span>{props.strength}</span>
          </div>
          <div className="monster__attributes">
            <img src={defense} alt="elements" className="icon" />
            <span>{props.defense}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MonsterItem;
