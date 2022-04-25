export default function Score({ text, score }) {
  return (
    <div className=" font-medium text-lg">
      {text}: {score}
    </div>
  );
}
