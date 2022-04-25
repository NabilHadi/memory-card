import { useEffect, useState } from "react";
import getCardCollection from "../cards-collections";
import Card from "./Card";

const shuffleArray = (array, setArray) => {
  setArray(
    array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  );
};

export default function CardContainer({ addOneToScore, resetCurrentScore }) {
  const [cards, setCards] = useState(getCardCollection());

  useEffect(() => {
    shuffleArray(cards, setCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    shuffleArray(cards, setCards);
  };

  return (
    <div className=" p-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
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
