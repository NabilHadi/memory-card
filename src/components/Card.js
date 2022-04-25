export default function Card({ id, name, img, handleOnClick }) {
  return (
    <div
      className="flex flex-col w-52 bg-orange-100 p-4 text-center gap-2 border-orange-200 rounded-lg shadow-md hover:opacity-90 hover:shadow-lg active:opacity-100 justify-self-center cursor-pointer hover:p-3 select-none"
      onClickCapture={() => handleOnClick(id)}
    >
      <div className="text-orange-500">{img}</div>
      <div className="text-lg">{name}</div>
    </div>
  );
}
