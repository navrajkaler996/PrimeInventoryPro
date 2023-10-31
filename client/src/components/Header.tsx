import { useDispatch, useSelector } from "react-redux";
import Toast from "./Toast";
import { useEffect } from "react";
import { displayToastMessage } from "../features/toastSlice";

const Header: React.FC = () => {
  const {
    display: displayToast,
    message,
    type,
  } = useSelector((state: any) => state.displayToastMessage);

  return (
    <div className="w-full h-80 bg-white relative">
      {displayToast && <Toast type={type} message={message} />}
    </div>
  );
};

export default Header;
