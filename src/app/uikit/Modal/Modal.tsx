import styles from "./Modal.module.scss";
import { ReactNode } from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ className, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.container} onClick={onClose}>
      <div
        className={`${styles.modal} ${className ?? ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose}>
          <IoMdCloseCircle size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};
