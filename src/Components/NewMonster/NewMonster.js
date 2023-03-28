import React, { useState } from "react";
import MonsterForm from "./MonsterForm";

const NewMonster = (props) => {
  const onSaveMonsterDataHandler = (enteredMonsterData) => {
    const monsterData = {
      ...enteredMonsterData,
      id: Math.random().toString(),
    };
    props.onAddMonster(monsterData);
  };

  return <MonsterForm onSaveMonsterData={onSaveMonsterDataHandler} />;
};

export default NewMonster;
