export default function Card({ id, name, img, handleOnClick }) {
  return (
    <div id={id} className="Card" onClickCapture={() => handleOnClick(id)}>
      <img src={img} alt="card" />
      <div className="cardName">{name}</div>
    </div>
  );
}
