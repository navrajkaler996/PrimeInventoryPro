import { useState } from "react";

//Importing utilities
import { SingleToastType } from "../components/utils/types";

const useToast = () => {
  const [toasts, setToasts] = useState<SingleToastType[]>([]);
  const [autoClose, setAutoClose] = useState(true);

  const showToast = (message: string, type: string) => {
    const toast = {
      id: new Date(),
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, toast]);

    if (autoClose) {
      setTimeout(() => {
        removeToast(toast.id);
      }, 10000);
    }
  };

  const removeToast = (id: Date) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const removeAllToasts = () => {
    setToasts([]);
  };

  return { toasts, showToast, removeToast };
};

export default useToast;
