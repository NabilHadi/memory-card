export default function CardContainer({
  addOneToScore,
  resetCurrentScore,
  resetAllScores,
}) {
  return (
    <div className="CardsContainer">
      Cards should be here :)
      <button onClick={addOneToScore}>add 1 to score</button>
      <button onClick={resetCurrentScore}>resetCurrentScore</button>
      <button onClick={resetAllScores}>resetAllScores</button>
    </div>
  );
}
