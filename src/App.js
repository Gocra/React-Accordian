import "./App.css";
import Accordian from "./Accordian";

function App() {
  return (
    <div className="App">
      <Accordian title="The single accordian" multi={false} />
      <Accordian title="The multi accordian" multi={true} />
    </div>
  );
}

export default App;
