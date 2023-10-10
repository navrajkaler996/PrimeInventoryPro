import { FLASH_MESSAGE_TYPES } from "../utils/constants";

interface FlashMessageType {
  message: string;
  type: string;
}

const FlashMessage: React.FC<FlashMessageType> = ({ message, type }) => {
  return (
    <div
      id="flash-message"
      className="w-[60%] h-[5rem] mx-[auto] mt-[4rem] flex justify-center items-center"
      style={{ backgroundColor: FLASH_MESSAGE_TYPES[type] }}>
      <span> {message} </span>
    </div>
  );
};

export default FlashMessage;
