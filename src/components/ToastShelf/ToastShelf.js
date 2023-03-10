import React from "react";

import styles from "./ToastShelf.module.css";
import Toast from "../Toast";

function ToastShelf({ toasts, handleDismiss }) {
  if (!toasts) return null;

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant} handleDismiss={handleDismiss}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
