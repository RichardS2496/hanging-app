import "./styles/App.css";
import "./styles/buttons.css";
import { HangImage } from "./components/HangImage";
import { LettersBoard } from "./components/LettersBoard";
import { useHangmanGame } from "./hooks/useHangmanGame";

function App() {
  const { restartGame, checkLetter, attempts, lose, won, hiddenWord, word } =
    useHangmanGame();

  return (
    <>
      <div className="App">
        <div className="left-side border-content">
          <div className="left-side-content ">
            <div>
              <HangImage imageNumber={attempts} />
            </div>
            <div>
              <h3>{hiddenWord}</h3>
            </div>
          </div>
          <div className="left-side-letterBoard">
            <LettersBoard checkLetter={checkLetter} />
          </div>
        </div>
        <div className="right-side border-content">
          <button onClick={restartGame}>Restart</button>

          <h3>Intentos: {attempts}</h3>
          {lose ? <h3 className="text-red-50">Ha Perdido {word}</h3> : ""}
          {won ? <h3 className="text-blue">¡Ha Ganado!</h3> : ""}
        </div>
      </div>
    </>
  );
}

export default App;
