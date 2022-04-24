import Score from "./components/Score";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>Memory Card</h1>
      <div className="score-container">
        <Score text="Current Score" score={0} />
        <Score text="Best Score" score={0} />
      </div>
    </div>
  );
}

export default App;
