import "./styles/App.css";
import "./styles/buttons.css";

import { HangImage } from "./components/HangImage";
import { LettersBoard } from "./components/LettersBoard";
import { SongPlayer } from "./components/SongPlayer";
import { useHangmanGame } from "./hooks/useHangmanGame";

import { useEffect } from "react";
import { Popup } from "./components/Popup";
import { usePopup } from "./hooks/usePopup";

function App() {
  const {
    popupMessage,
    isPopupVisible,
    popupButtonText,
    startGame,
    showWinPopup,
    showLosePopup,
    setIsPopupVisible,
  } = usePopup();

  const {
    restartGame,
    checkLetter,
    attempts,
    lose,
    won,
    hiddenWord,
    usedKeys,
    alreadyPressed,
  } = useHangmanGame();

  useEffect(() => {
    setIsPopupVisible(true);
  }, [setIsPopupVisible]);

  useEffect(() => {
    if (won) {
      showWinPopup();
    } else if (lose) {
      showLosePopup();
    }
  }, [won, lose, showWinPopup, showLosePopup]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      "button, input, a, textarea, select"
    );
    elements.forEach((el) => {
      if (isPopupVisible) {
        el.setAttribute("tabindex", "-1");
      } else {
        el.removeAttribute("tabindex");
      }
    });

    return () => {
      elements.forEach((el) => el.removeAttribute("tabindex"));
    };
  }, [isPopupVisible]);

  return (
    <>
      <Popup
        message={popupMessage}
        buttonText={popupButtonText}
        onButtonClick={() => {
          setIsPopupVisible(false);
          if (
            popupMessage === "¡Has Ganado!" ||
            popupMessage === "¡Has Perdido!"
          ) {
            restartGame();
          } else {
            startGame();
          }
        }}
        isVisible={isPopupVisible}
      />
      <div className="App">
        <div className="left-side border-content">
          <div className="left-side-content ">
            <div className="intern-left-side-content w-[40%] px-8 pt-8 z-1">
              <HangImage imageNumber={attempts} />
            </div>
            <div className="intern-left-side-content word-side w-[60%]">
              <h3>{hiddenWord}</h3>
            </div>
          </div>
          <div className="left-side-letterBoard z-0">
            <LettersBoard
              checkLetter={checkLetter}
              alreadyPressed={alreadyPressed}
              usedKeys={usedKeys}
              won={won}
              lose={lose}
            />
          </div>
        </div>
        <div className="right-side border-content">
          <div className="flex flex-row justify-between items-center">
            <SongPlayer />
            <button
              className="song-toggle-btn text-amber-100 font-semibold"
              onClick={restartGame}
            >
              Reiniciar Juego
            </button>
          </div>
          <div>
            <h3 className="text-center font-bold text-xl text-yellow-800">
              Intentos
            </h3>
            <h2 className="text-center font-bold text-6xl text-yellow-800">
              {attempts}
              <span className="text-2xl">/9</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
