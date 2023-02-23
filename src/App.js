import "./App.css";
import Card from "./components/Card/Card";
import logo from "./assets/react.svg";

function App() {
  return (
    <div className="App">
      <header>
        <img className="title-logo" src={logo} alt="" />
      </header>

      <div className="table-container">
        <div className="table">
          <h2 className="table-title">Languages</h2>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
