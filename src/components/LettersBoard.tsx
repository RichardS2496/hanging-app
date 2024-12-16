import { useEffect } from "react";
import { letters } from "../helpers/letters";
import { LettersBoardProps } from "../interfaces/LetterBoardTypes";
import "../styles/buttons.css";

export function LettersBoard({
  checkLetter,
  alreadyPressed,
  usedKeys,
}: LettersBoardProps) {
  const rows = [0, 10, 20];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyPressed = event.key.toUpperCase();
      if (letters.includes(keyPressed)) {
        checkLetter(keyPressed);
        alreadyPressed(keyPressed);
      }
    };
    document.addEventListener("keypress", handleKeyDown);
    return () => {
      document.removeEventListener("keypress", handleKeyDown);
    };
  }, [checkLetter, usedKeys, alreadyPressed]);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {rows.map((start, index) => (
        <div key={index} className="flex flex-row gap-2">
          {letters
            .slice(start, rows[index + 1] || letters.length)
            .map((letter) => (
              <button
                className={`letter-btn ${
                  usedKeys.includes(letter) ? "btn-pressed" : ""
                }`}
                disabled={usedKeys.includes(letter)}
                onClick={() => {
                  checkLetter(letter);
                  alreadyPressed(letter);
                }}
                key={letter}
              >
                {letter}
              </button>
            ))}
        </div>
      ))}
    </div>
  );
}
