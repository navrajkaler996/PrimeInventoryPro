//Importing icons
import CloseIcon from "../assets/cross.png";

//Importing utilities
import { ToastType } from "./utils/types";
import { getBackgroundColor, getIcon } from "./utils/helper";

/////RENDER A REUSABLE COMPONENT
//This component creates a toast message
//Accepts two props
//type: A string which indicates the type of toast message to display
//message: A string which is the actual message to be displayed on the toast
const Toast: React.FC<ToastType> = ({ type, message }) => {
  return (
    <div
      id="toast"
      className=" w-[35rem] h-[8rem] bg-black shadow-custom fixed right-[2%]  z-10 toast-pop-up ">
      <div
        className="flex justify-center items-center w-[35rem] h-[7.5rem] relative"
        style={getBackgroundColor(type)}>
        <img src={getIcon(type)} className="w-[4rem]" />
        <div className="ml-[2rem]">
          <p className="text-[1.2em] uppercase">{type}</p>
          <p>{message}</p>
        </div>
        <img
          src={CloseIcon}
          className="absolute top-[1rem] right-[1rem] w-[1rem] hover:cursor-pointer hover:scale-[1.3] transition-all"
        />
      </div>
      <div className="w-[35rem] h-[.5rem]">
        <div className="w-[35rem] h-[.5rem] bg-primary toast-loading"></div>
      </div>
    </div>
  );
};

export default Toast;
