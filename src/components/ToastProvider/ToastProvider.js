import React from "react";
import { useEscapeKey } from "../../hooks/use-escape-key.hook";

export const ToastContext = React.createContext(undefined);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  useEscapeKey(() => {
    // Dismiss all toasts
    setToasts([]);
  });

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: Math.random(),
        message,
        variant,
      },
    ];
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{ dismissToast, createToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
