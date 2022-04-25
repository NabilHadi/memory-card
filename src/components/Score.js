export default function Score({ text, score }) {
  return (
    <div className=" font-medium text-lg p-1">
      {text}: {score}
    </div>
  );
}
