//Importing components
import Toast from "./Toast";

//Importing utilities
import { SingleToastType, ToastListType } from "./utils/types";

const ToastList: React.FC<ToastListType> = ({ data, closeHandler }) => {
  return (
    data.reverse().length > 0 && (
      <div
        className="toast-list toast-list--top-right fixed p-[4rem] w-[100%] max-w-[40rem] top-0 right-0 z-10"
        aria-live="assertive">
        {data.reverse().map((toast: SingleToastType) => (
          <Toast
            // key={toast.id}
            message={toast.message}
            type={toast.type}
            closeHandler={() => closeHandler(toast.id)}
          />
        ))}
      </div>
    )
  );
};

export default ToastList;
