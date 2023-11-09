//Importing icons
import CloseIcon from "../assets/cross.png";

//Importing utilities
import { getBackgroundColor, getIcon } from "./utils/helper";
import { ToastType } from "./utils/types";

const Toast: React.FC<ToastType> = ({ message, type, closeHandler }) => {
  return (
    <div className="toast w-[35rem] h-[8rem] bg-black shadow-custom relative opacity-[.8] hover:opacity-[1] hover:cursor-pointer z-[10]">
      <div
        className="flex justify-start items-center w-[35rem] h-[8rem] relative p-[2rem]"
        style={getBackgroundColor(type)}>
        <img src={getIcon(type)} className="w-[4rem]" />
        <div className="ml-[2rem]">
          <p className="text-[1.2em] uppercase">{type}</p>
          <p className="text-[.9em]">{message}</p>
          <img
            src={CloseIcon}
            className="absolute top-[1rem] right-[1rem] w-[1rem] hover:cursor-pointer hover:scale-[1.3] transition-all"
            onClick={() => closeHandler()}
          />
        </div>
      </div>
    </div>
  );
};

export default Toast;
