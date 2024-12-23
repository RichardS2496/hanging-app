import { useState } from "react";
import "../styles/popup.css";

export function usePopup() {
  const [popupMessage, setPopupMessage] = useState<string>("HANGMAN");
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [popupButtonText, setPopupButtonText] =
    useState<string>("Empezar Juego");

  const startGame = () => {
    setIsPopupVisible(false);
  };

  const showWinPopup = () => {
    setPopupMessage("¡Has Ganado!");
    setIsPopupVisible(true);
    setPopupButtonText("Jugar de Nuevo");
  };

  const showLosePopup = () => {
    setPopupMessage("¡Has Perdido!");
    setIsPopupVisible(true);
    setPopupButtonText("Volver a Jugar");
  };

  return {
    popupMessage,
    isPopupVisible,
    popupButtonText,
    startGame,
    showWinPopup,
    showLosePopup,
    setIsPopupVisible,
  };
}
