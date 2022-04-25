import { useEffect, useState } from "react";
import getCardCollection from "./cards-collections";
import CardContainer from "./components/CardsContainer";
import Score from "./components/Score";
import TutorialModal from "./components/TutorialModal";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [maxScore, setMaxScore] = useState(getCardCollection().length);
  const [showModal, setShowModal] = useState(true);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScore]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <TutorialModal closeModalFun={closeModal} />}
      <div className="App p-4 min-h-screen bg-orange-50 font-poppins">
        <h1 className="text-3xl font-bold tracking-wide text-center font-permanentMarker">
          Memory Card Game
        </h1>
        <div className="flex justify-around p-4 items-center">
          <Score text="Current Score" score={currentScore} />
          <Score text="Best Score" score={bestScore} />
          <Score text="Max Score" score={maxScore} />
        </div>
        <CardContainer
          addOneToScore={addOneToScore}
          resetCurrentScore={resetCurrentScore}
          resetAllScores={resetAllScores}
          setMaxScore={setMaxScore}
        />
      </div>
    </>
  );
}

export default App;
