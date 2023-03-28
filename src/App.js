import logo from "./Icons/logo.svg";
import "./App.css";
import NewMonster from "./Components/NewMonster/NewMonster";
import React, { useState } from "react";
import Monsters from "./Components/Monsters/Monsters";

const DUMMY_MOSNTERS = [
  {
    id: "e1",
    name: "Toilet Paper",
    stregth: 94.12,
    defense: 10.02,
  },
  {
    id: "e1",
    name: "Shadow slayer",
    stregth: 130.02,
    defense: 0.001,
  },
];

function App() {
  const [monsters, setMonsters] = useState(DUMMY_MOSNTERS);
  const addMonsterHandler = (monster) => {
    setMonsters((prevMonser) => {
      return [monster, ...monsters];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <div>
        <NewMonster onAddMonster={addMonsterHandler} />
        <Monsters items={monsters} />
      </div>
    </div>
  );
}

export default App;
