import { useModal } from "../../contexts/ModalContext";
import Button from "./Button";
import styles from "./ImageSlider.module.css";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import TrailerView from "./TrailerView";

function ImageSlider({ image, name, description, trailer }) {
  const { openModal } = useModal();
  const newUrl = trailer.replace("watch?v=", "embed/");

  return (
    <div className={styles.slider}>
      <AnimatePresence mode="wait">
        <motion.img
          key={image}
          src={image}
          alt={name}
          className={styles.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className={styles.sliderInfo}>
        <AnimatePresence mode="sync">
          <motion.h1
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {name}
          </motion.h1>
          <blockquote>{description}</blockquote>
        </AnimatePresence>
        <div className={styles.buttonsContainer}>
          <Button type="primary">Comprar boletos</Button>
          <Button
            type="secondary"
            onClick={() => openModal(<TrailerView url={newUrl} name={name} />)}
          >
            Mirar trailer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
