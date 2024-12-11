import { useEffect, useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { LettersBoard } from "./components/LettersBoard";

function App() {
  const [attempts, setAttempts] = useState(0);
  const [word] = useState("COMPUTADORA");
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(" ").join("");
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord, word]);

  const checkLetter = (letter: string) => {
    if (lose) return;

    if (!word.includes(letter)) {
      //si la letra no existe, suma el intento
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
    setAttempts(0);
    setHiddenWord("_ ".repeat(word.length));
    setLose(false);
    setWon(false);
  };

  return (
    <>
      <div className="App">
        <HangImage imageNumber={attempts} />
        <h3>{hiddenWord}</h3>
        <h3>Intentos: {attempts}</h3>
        {lose ? <h3>Ha Perdido</h3> : ""}
        {won ? <h3>¡Ha Ganado!</h3> : ""}
        <button onClick={restartGame}>Restart</button>
        <LettersBoard checkLetter={checkLetter} />
      </div>
    </>
  );
}

export default App;
