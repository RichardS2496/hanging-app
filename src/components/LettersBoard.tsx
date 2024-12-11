import { letters } from "../helpers/letters";

interface LettersBoardProps {
  checkLetter: (letter: string) => void;
}

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
