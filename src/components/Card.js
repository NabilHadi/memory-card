export default function Card({ id, name, img, handleOnClick }) {
  return (
    <div
      className="card clickable w-52 bg-orange-100 justify-self-center hover:p-3 select-none transition-all"
      onClickCapture={() => handleOnClick(id)}
    >
      <div className="text-orange-500">{img}</div>
      <div className="text-lg">{name}</div>
    </div>
  );
}
