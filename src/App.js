import logo from "./Icons/logo.svg";
import "./App.css";
import NewMonster from "./Components/NewMonster/NewMonster";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Monsters</h1>
      </header>
      <div>
        <NewMonster />
      </div>
    </div>
  );
}

export default App;
