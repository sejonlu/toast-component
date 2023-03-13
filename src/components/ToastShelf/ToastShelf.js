import React from "react";

import styles from "./ToastShelf.module.css";
import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, dismissAllToasts } = React.useContext(ToastContext);
  useEscapeKey(dismissAllToasts);
  if (!toasts) return null;

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}

export default ToastShelf;
