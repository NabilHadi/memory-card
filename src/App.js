import { useEffect, useState } from "react";
import CardContainer from "./components/CardsContainer";
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
      <h1 className="text-3xl font-bold underline">Memory Card</h1>
      <div className="score-container">
        <Score text="Current Score" score={currentScore} />
        <Score text="Best Score" score={bestScore} />
      </div>
      <CardContainer
        addOneToScore={addOneToScore}
        resetCurrentScore={resetCurrentScore}
      />
    </div>
  );
}

export default App;
