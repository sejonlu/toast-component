import React from "react";

import styles from "./ToastShelf.module.css";
import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  if (!toasts) return null;

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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

export default ToastShelf;
