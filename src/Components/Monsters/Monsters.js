import React from "react";
import MonsterList from "./MonstersList";

const Monsters = (props) => {
  return (
    <div>
      <MonsterList items={props.items} />
    </div>
  );
};

export default Monsters;
