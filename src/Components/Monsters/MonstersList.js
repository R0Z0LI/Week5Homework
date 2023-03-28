import React from "react";
import MonsterItem from "./MonsterItem";

const MonsterList = (props) => {
  return (
    <ul>
      {props.items.map((monster) => (
        <MonsterItem
          key={monster.id}
          name={monster.name}
          strength={monster.strength}
          defense={monster.defense}
          type={monster.type}
        />
      ))}
    </ul>
  );
};

export default MonsterList;
