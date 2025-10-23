import { HiX } from "react-icons/hi";
import Button from "./Button";
import styles from "./Modal.module.css";
import { useModal } from "../../contexts/ModalContext";

function Modal({ children }) {
  const { closeModal } = useModal();

  return (
    <>
      <div className={styles.modal}>
        <div>{children}</div>
        <Button
          shape="circle"
          type="secondary"
          onClick={closeModal}
          className={styles.modalCloseBtn}
        >
          <HiX />
        </Button>
      </div>
      <div className={styles.overlay} onClick={closeModal}></div>
    </>
  );
}

export default Modal;
