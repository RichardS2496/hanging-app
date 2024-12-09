import { letters } from "../helpers/letters";

export function LettersBoard() {
  return (
    <div>
      {letters.map((letter) => {
        return <button key={letter}>{letter}</button>;
      })}
    </div>
  );
}
