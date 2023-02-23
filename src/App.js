import "./App.css";
import Card from "./components/Card/Card";
import logo from "./assets/react.svg";
import { languages } from "./helper/data";

function App() {
 /*  console.log(languages); */
  return (
    <div className="App">
      <header>
        <img className="title-logo" src={logo} alt="" />
      </header>

      <div className="table-container">
        <div className="table">
          <h2 className="table-title">Languages</h2>
          <div className="table-cards">{languages.map((data, index)=>
            <Card {...data} key={index}/>
          )}</div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
