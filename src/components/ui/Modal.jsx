import { HiX } from "react-icons/hi";
import Button from "./Button";
import styles from "./Modal.module.css";
import { useModal } from "../../contexts/ModalContext";
import { motion } from "framer-motion";

function Modal({ children }) {
  const { closeModal } = useModal();

  return (
    <>
      <div className={styles.modalContainer}>
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{
            duration: 0.2,
            scale: { type: "spring", visualDuration: 0.3, bounce: 0.3 },
          }}
        >
          <div>{children}</div>
          <Button
            shape="circle"
            type="secondary"
            onClick={closeModal}
            className={styles.modalCloseBtn}
          >
            <HiX />
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, y: 30 }}
        transition={{
          duration: 0.2,
          scale: { type: "spring", visualDuration: 0.3, bounce: 0.3 },
        }}
        className={styles.overlay}
        onClick={closeModal}
      ></motion.div>
    </>
  );
}

export default Modal;
