import logo from "./logo.svg";
import "./App.css";
import Userform from "./components/Userform";

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          <b>Let's generate your Resume!</b>
        </h1>
        <p>Please provide accurate and clear description wherever necessary</p>
        <Userform />
      </div>
    </div>
  );
}

export default App;
