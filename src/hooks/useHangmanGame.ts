import { useEffect, useState } from "react";
import { getRandomWord } from "../helpers/getRandomWord";

export function useHangmanGame() {
  const [attempts, setAttempts] = useState(0);
  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);
  const [usedKeys, setUsedKeys] = useState<string[]>([]);

  const alreadyPressed = (key: string) => {
    setUsedKeys((prev) => [...prev, key]);
  };

  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
    const currentHiddenWord = hiddenWord.split(" ").join("");

    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [attempts, hiddenWord, word]);

  const checkLetter = (letter: string) => {
    if (lose || won) return;

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(" ");
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(" "));
  };

  const restartGame = () => {
    const newWord = getRandomWord();
    setWord(newWord);
    setAttempts(0);
    setHiddenWord("_ ".repeat(newWord.length));
    setLose(false);
    setWon(false);
    setUsedKeys([]);
  };

  return {
    restartGame,
    checkLetter,
    attempts,
    hiddenWord,
    word,
    lose,
    won,
    usedKeys,
    setUsedKeys,
    alreadyPressed,
  };
}
