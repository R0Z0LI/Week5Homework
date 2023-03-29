import React from "react";
import MonsterList from "./MonstersList";

const Monsters = (props) => {
  const onDeleteMonsterHandler = (id) => {
    props.onDeleteMonsterData(id);
  };
  return (
    <div>
      <MonsterList
        items={props.items}
        onDeleteMonster={onDeleteMonsterHandler}
      />
    </div>
  );
};

export default Monsters;
