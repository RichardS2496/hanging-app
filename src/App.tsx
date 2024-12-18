import "./styles/App.css";
import "./styles/buttons.css";
import { HangImage } from "./components/HangImage";
import { LettersBoard } from "./components/LettersBoard";
import { SongPlayer } from "./components/SongPlayer";
import { useHangmanGame } from "./hooks/useHangmanGame";

function App() {
  const {
    restartGame,
    checkLetter,
    attempts,
    lose,
    won,
    hiddenWord,
    word,
    usedKeys,
    alreadyPressed,
  } = useHangmanGame();

  return (
    <>
      <div className="App">
        <div className="left-side border-content">
          <div className="left-side-content ">
            <div className="intern-left-side-content">
              <HangImage imageNumber={attempts} />
            </div>
            <div className="intern-left-side-content word-side">
              <h3>{hiddenWord}</h3>
            </div>
          </div>
          <div className="left-side-letterBoard">
            <LettersBoard
              checkLetter={checkLetter}
              alreadyPressed={alreadyPressed}
              usedKeys={usedKeys}
            />
          </div>
        </div>
        <div className="right-side border-content">
          <SongPlayer />
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
