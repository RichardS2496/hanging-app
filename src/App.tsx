import "./App.css";
import { HangImage } from "./components/HangImage";
import { LettersBoard } from "./components/LettersBoard";
import { useHangmanGame } from "./hooks/useHangmanGame";

function App() {
  const { restartGame, checkLetter, attempts, lose, won, hiddenWord, word } =
    useHangmanGame();

  return (
    <>
      <div className="App">
        <HangImage imageNumber={attempts} />
        <h3>{hiddenWord}</h3>
        <h3>Intentos: {attempts}</h3>
        {lose ? <h3>Ha Perdido {word}</h3> : ""}
        {won ? <h3>¡Ha Ganado!</h3> : ""}
        <button onClick={restartGame}>Restart</button>
        <LettersBoard checkLetter={checkLetter} />
      </div>
    </>
  );
}

export default App;
