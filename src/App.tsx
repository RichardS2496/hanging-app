import "./App.css";
import { HangImage } from "./components/HangImage";
import { LettersBoard } from "./components/LettersBoard";
import { useHangmanGame } from "./hooks/useHangmanGame";

function App() {
  const { restartGame, checkLetter, attempts, lose, won, hiddenWord, word } =
    useHangmanGame();

  return (
    <>
      <div className="App text-red-900">
        <HangImage imageNumber={attempts} />
        <h3>{hiddenWord}</h3>
        <h3>Intentos: {attempts}</h3>
        {lose ? <h3 className="text-red-50">Ha Perdido {word}</h3> : ""}
        {won ? <h3 className="text-blue">¡Ha Ganado!</h3> : ""}
        <button onClick={restartGame}>Restart</button>
        <LettersBoard checkLetter={checkLetter} />
      </div>
    </>
  );
}

export default App;
