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
  mdiWebpack,
} from "@mdi/js";

export default function getCardCollection() {
  return [
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
  ];
}
