import { useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";

import chickImg from "../karim-manjra-hQV3s7J6eM4-unsplash.jpg";

export default function CardContainer({
  addOneToScore,
  resetCurrentScore,
  resetAllScores,
}) {
  const [cards, setCards] = useState([
    {
      id: uniqid(),
      isClicked: false,
      name: "some random card0",
      img: chickImg,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "some random card1",
      img: chickImg,
    },
  ]);

  const handleCardClick = (id) => {
    const card = cards.find((c) => {
      return c.id === id;
    });
    if (!card) return;

    if (!card.isClicked) {
      setCards(
        cards.map((c) => {
          if (c === card) {
            c.isClicked = true;
          }
          return c;
        })
      );
      addOneToScore();
    } else {
      setCards(
        cards.map((c) => {
          c.isClicked = false;
          return c;
        })
      );
      resetCurrentScore();
    }
  };

  return (
    <div className="CardsContainer">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            img={card.img}
            handleOnClick={handleCardClick}
          />
        );
      })}
    </div>
  );
}
