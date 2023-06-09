import React, { useState } from "react";

import "./MonsterItem.modul.css";

import strength from "../../Icons/attack.svg";
import defense from "../../Icons/defense.svg";
import trash from "../../Icons/trash-can.svg";

const MonsterItem = (props) => {
  const image = props.type;

  const onClickHandler = () => {
    props.onDeleteMonsterItem(props.id);
  };
  return (
    <li className="monster-list">
      <img src={image} alt="elements" className="type" />
      <div className="monster-item">
        <div>
          <p className="monster-item__name">{props.name}</p>
          <div className="monster-item__attributes">
            <img src={strength} alt="elements" className="monster-item__icon" />
            <span>{props.strength}</span>
          </div>
          <div className="monster-item__attributes">
            <img src={defense} alt="elements" className="monster-item__icon" />
            <span>{props.defense}</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src={trash}
          alt="trash-can"
          className="monster-item__delete"
          onClick={onClickHandler}
        />
      </div>
    </li>
  );
};

export default MonsterItem;
