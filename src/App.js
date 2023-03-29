import logo from "./Icons/logo.svg";
import "./App.css";
import NewMonster from "./components/newMonster/NewMonster";
import React, { useState } from "react";
import Monsters from "./components/monsters/Monsters";
import air from "./Icons/air.svg";
import fire from "./Icons/fire.svg";
const DUMMY_MOSNTERS = [
  {
    id: "e1",
    name: "Toilet Paper",
    strength: 94.12,
    defense: 10.02,
    type: air,
  },
  {
    id: "e2",
    name: "Shadow slayer",
    strength: 130.02,
    defense: 0.001,
    type: fire,
  },
];

function App() {
  const [monsters, setMonsters] = useState(DUMMY_MOSNTERS);

  const addMonsterHandler = (monster) => {
    setMonsters((prevMonster) => {
      return [monster, ...monsters];
    });
  };

  const onDeleteMonsterDataHandler = (id) => {
    let index = -1;
    for (let i = 0; i < monsters.length; i++) {
      if (monsters[i].id === id) {
        index = i;
      }
    }
    setMonsters((prevMonster) => {
      return prevMonster.filter((_, i) => i !== index);
    });
    console.log(monsters);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <div>
        <NewMonster onAddMonster={addMonsterHandler} />
        <Monsters
          items={monsters}
          onDeleteMonsterData={onDeleteMonsterDataHandler}
        />
      </div>
    </div>
  );
}

export default App;
