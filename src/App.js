import logo from "./Icons/logo.svg";
import "./App.css";
import NewMonster from "./components/newMonster/NewMonster";
import React, { useState } from "react";
import Monsters from "./components/monsters/Monsters";
import air from "./Icons/air.svg";
import fire from "./Icons/fire.svg";

function App() {
  //localStorage.clear();
  const [monsters, setMonsters] = useState(() => {
    let loadMonsters = localStorage.getItem("newMonster");
    const initialValue = JSON.parse(loadMonsters);
    return initialValue || [];
  });
  const addMonsterHandler = (monster) => {
    setMonsters((prevMonster) => {
      let addedMonster = [monster, ...monsters];
      localStorage.setItem("newMonster", JSON.stringify(addedMonster));
      return addedMonster;
    });
  };

  const onDeleteMonsterDataHandler = (id) => {
    let index = -1;
    for (let i = 0; i < monsters.length; i++) {
      if (monsters[i].id === id) {
        index = i;
      }
    }
    var list = JSON.parse(localStorage.getItem("newMonster"));
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        console.log(list[i]);
        list.splice(i, 1);
      }
    }
    list = JSON.stringify(list);
    console.log(list);
    localStorage.setItem("newMonster", list);

    setMonsters((prevMonster) => {
      return prevMonster.filter((_, i) => i !== index);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <div>
        <h1 className="title">Monsters</h1>
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
