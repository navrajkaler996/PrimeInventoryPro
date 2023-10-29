import { useEffect, useState } from "react";
import { FLASH_MESSAGE_TYPES } from "../utils/constants";

interface FlashMessageType {
  message: string;
  type: string;
  timer: boolean | undefined;
}

const FlashMessage: React.FC<FlashMessageType> = ({ message, type, timer }) => {
  const [hide, setHide] = useState(false);
  let messageType;

  for (let [key, value] of Object.entries(FLASH_MESSAGE_TYPES)) {
    if (key == type) {
      messageType = value;
      break;
    }
  }

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        setHide(true);
      }, 5000);
    }
  }, []);
  return !hide ? (
    <div
      id="flash-message"
      className="w-[60%] h-[5rem] mx-[auto] flex justify-center items-center"
      style={{ backgroundColor: messageType }}>
      <span> {message} </span>
    </div>
  ) : (
    <></>
  );
};

export default FlashMessage;
