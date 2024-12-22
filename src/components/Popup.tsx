import { FC } from "react";
import { PopupProps } from "../interfaces/PopupProps";
import "../styles/popup.css";

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
        <button className="popup-btn" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
