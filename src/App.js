import { useEffect, useState } from "react";
import Score from "./components/Score";
import "./styles/App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const addOneToScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0);
  };

  const resetAllScores = () => {
    setCurrentScore(0);
    setBestScore(0);
  };

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore]);

  return (
    <div className="App">
      <h1>Memory Card</h1>
      <div className="score-container">
        <Score text="Current Score" score={currentScore} />
        <Score text="Best Score" score={bestScore} />
      </div>
      <button onClick={addOneToScore}>add 1 to score</button>
      <button onClick={resetCurrentScore}>resetCurrentScore</button>
      <button onClick={resetAllScores}>resetAllScores</button>
    </div>
  );
}

export default App;
