import { useEffect } from "react";
import styles from "./styles/Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={styles.modalBody}>
          <div className={styles.modalControls}>
            <button className={styles.closeBtn} onClick={onClose}>
              &times;
            </button>
          </div>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </div>
  );
}
