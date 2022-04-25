import { useEffect, useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";

import Icon from "@mdi/react";
import {
  mdiAbacus,
  mdiAbTesting,
  mdiAccessPoint,
  mdiBabel,
  mdiBolt,
  mdiCar,
  mdiChemicalWeapon,
  mdiGoogleChrome,
  mdiIceCream,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiNail,
  mdiReact,
  mdiWebpack,
} from "@mdi/js";

export default function CardContainer({ addOneToScore, resetCurrentScore }) {
  const [cards, setCards] = useState([
    {
      id: uniqid(),
      isClicked: false,
      name: "Car",
      img: <Icon path={mdiCar} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Bolt",
      img: <Icon path={mdiBolt} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Abacus",
      img: <Icon path={mdiAbacus} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Chemical Weapon",
      img: <Icon path={mdiChemicalWeapon} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Testing",
      img: <Icon path={mdiAbTesting} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Access Point",
      img: <Icon path={mdiAccessPoint} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Babel",
      img: <Icon path={mdiBabel} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Webpack",
      img: <Icon path={mdiWebpack} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Javascript",
      img: <Icon path={mdiLanguageJavascript} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Java",
      img: <Icon path={mdiLanguageJava} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Google Chrome",
      img: <Icon path={mdiGoogleChrome} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Ice Cream",
      img: <Icon path={mdiIceCream} />,
    },
    {
      id: uniqid(),
      isClicked: false,
      name: "Nail",
      img: <Icon path={mdiNail} />,
    },
  ]);

  const shuffleArray = () => {
    setCards(
      cards
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  };

  useEffect(() => {
    shuffleArray();
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
    shuffleArray();
  };

  return (
    <div className=" p-4  grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
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
