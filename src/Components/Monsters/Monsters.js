import React, { useState } from "react";
import MonstersFilter from "./MonstersFilter";
import MonsterList from "./MonstersList";

const Monsters = (props) => {
  const [filteredName, setFilteredName] = useState("");

  const onDeleteMonsterHandler = (id) => {
    props.onDeleteMonsterData(id);
  };

  const filteredNameHandler = (typedName) => {
    setFilteredName(typedName);
  };

  const filteredList = props.items.filter((monster) => {
    return (
      monster.name.toLowerCase().indexOf(filteredName.toLowerCase()) !== -1
    );
  });
  return (
    <div>
      <MonstersFilter items={filteredName} typed={filteredNameHandler} />
      <MonsterList
        items={filteredList}
        onDeleteMonster={onDeleteMonsterHandler}
      />
    </div>
  );
};

export default Monsters;
