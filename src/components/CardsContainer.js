import { useState } from "react";
import Card from "./Card";

import chickImg from "../karim-manjra-hQV3s7J6eM4-unsplash.jpg";

export default function CardContainer({
  addOneToScore,
  resetCurrentScore,
  resetAllScores,
}) {
  const [cards, setCards] = useState([
    {
      id: 0,
      isClicked: false,
      name: "some random card0",
      img: chickImg,
    },
    {
      id: 1,
      isClicked: false,
      name: "some random card1",
      img: chickImg,
    },
  ]);

  return (
    <div className="CardsContainer">
      {cards.map((card) => {
        return <Card id={card.id} name={card.name} img={card.img} />;
      })}
      <button onClick={addOneToScore}>add 1 to score</button>
      <button onClick={resetCurrentScore}>resetCurrentScore</button>
      <button onClick={resetAllScores}>resetAllScores</button>
    </div>
  );
}
