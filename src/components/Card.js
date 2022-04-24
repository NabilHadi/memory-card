export default function Card({ id, name, img }) {
  return (
    <div id={id} className="Card">
      <img src={img} alt="card" />
      <div className="cardName">{name}</div>
    </div>
  );
}
