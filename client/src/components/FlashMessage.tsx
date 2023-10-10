import { FLASH_MESSAGE_TYPES } from "../utils/constants";

interface FlashMessageType {
  message: string;
  type: string;
}

const FlashMessage: React.FC<FlashMessageType> = ({ message, type }) => {
  let messageType;

  for (let [key, value] of Object.entries(FLASH_MESSAGE_TYPES)) {
    if (key == type) {
      messageType = value;
      break;
    }
  }

  console.log(messageType);
  return (
    <div
      id="flash-message"
      className="w-[60%] h-[5rem] mx-[auto] mt-[4rem] flex justify-center items-center"
      style={{ backgroundColor: messageType }}>
      <span> {message} </span>
    </div>
  );
};

export default FlashMessage;
