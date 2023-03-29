import React, { useState } from "react";
import MonstersFilter from "./MonstersFilter";
import MonsterList from "./MonstersList";

const Monsters = (props) => {
  const [filteredNameList, setFilteredNameList] = useState(props.items);

  const onDeleteMonsterHandler = (id) => {
    props.onDeleteMonsterData(id);
  };

  const filteredNameHandler = (typedName) => {
    let filteredList = [...props.items];
    filteredList = filteredList.filter((monster) => {
      return monster.name.toLowerCase().indexOf(typedName.toLowerCase()) !== -1;
    });
    setFilteredNameList(filteredList);
    console.log(filteredList);
  };

  return (
    <div>
      <MonstersFilter items={props.items} typed={filteredNameHandler} />
      <MonsterList
        items={filteredNameList}
        onDeleteMonster={onDeleteMonsterHandler}
      />
    </div>
  );
};

export default Monsters;
