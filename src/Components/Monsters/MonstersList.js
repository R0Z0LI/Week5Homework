import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import MonsterItem from "./MonsterItem";
import "./MonstersList.css";

const MonsterList = (props) => {
  const onDeleteMonsterDataHandler = (id) => {
    props.onDeleteMonster(id);
  };

  return (
    <ul className="monsters-list">
      {props.items.map((monster) => (
        <MonsterItem
          key={monster.id}
          id={monster.id}
          name={monster.name}
          strength={monster.strength}
          defense={monster.defense}
          type={monster.type}
          onDeleteMonsterItem={onDeleteMonsterDataHandler}
        />
      ))}
    </ul>
  );
};

export default MonsterList;
