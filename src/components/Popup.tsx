import { FC } from "react";
import { PopupProps } from "../interfaces/PopupProps";
import "../styles/popup.css";
import "../styles/buttons.css";

export const Popup: FC<PopupProps> = ({
  message,
  buttonText,
  onButtonClick,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <p className="popup-message">{message}</p>
        <button
          className="song-toggle-btn text-amber-100 font-semibold"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
