import { useModal } from "../../contexts/ModalContext";
import Button from "./Button";
import styles from "./ImageSlider.module.css";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import TrailerView from "./TrailerView";

function ImageSlider({ image, name, description, trailer }) {
  const { openModal } = useModal();
  const newUrl = trailer.replace("watch?v=", "embed/");

  console.log(newUrl);
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
        <h1>{name}</h1>
        <blockquote>{description}</blockquote>
        <div className={styles.buttonsContainer}>
          <Button type="secondary">Comprar boletos</Button>
          <Button
            type="primary"
            onClick={() => openModal(<TrailerView url={newUrl} />)}
          >
            Mirar trailer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
