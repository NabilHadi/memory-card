export default function Card({ id, name, img, handleOnClick }) {
  return (
    <div
      id={id}
      className=" flex flex-col w-52 border-4 p-4 text-center gap-2 border-orange-200 rounded-sm"
      onClickCapture={() => handleOnClick(id)}
    >
      <img src={img} alt="card" className=" rounded-lg" />
      <div className=" text-lg">{name}</div>
    </div>
  );
}
