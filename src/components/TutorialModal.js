import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

export default function TutorialModal({ closeModalFun }) {
  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-gray-100/50">
      <div
        className="absolute right-[5%] top-[10%] rounded-full p-1 text-neutral-100 bg-orange-500 clickable transition-all hover:p-1.5"
        onClick={closeModalFun}
      >
        <Icon path={mdiClose} size="2rem" />
      </div>

      <div className="card bg-orange-400 font-poppins items-center gap-3">
        <h1 className="text-3xl font-bold tracking-wide text-center font-permanentMarker">
          Memory Card Game
        </h1>
        Let's see how many points you can get
        <div>Don't click on a card twice!</div>
        <button
          className="btn clickable bg-orange-300 w-fit"
          onClick={closeModalFun}
        >
          Play
        </button>
      </div>
    </div>
  );
}
