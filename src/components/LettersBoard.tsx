import { letters } from "../helpers/letters";
import { LettersBoardProps } from "../interfaces/LetterBoardTypes";

export function LettersBoard({ checkLetter }: LettersBoardProps) {
  return (
    <div>
      {letters.map((letter) => {
        return (
          <button onClick={() => checkLetter(letter)} key={letter}>
            {letter}
          </button>
        );
      })}
    </div>
  );
}
