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
  console.log(types[props.type]);
  const image = types[props.type];
  return (
    <li>
      <h2>{props.name}</h2>
      <img src={image} alt="elements" className="icon" />
      <div>
        <h2>{props.strength}</h2>
        <div>
          <h2>{props.defense}</h2>
        </div>
      </div>
    </li>
  );
};

export default MonsterItem;
