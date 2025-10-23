import { motion } from 'framer-motion';
import Header from "../layout/Header";
import AnimatedCarousel from "../ui/AnimatedCarousel";
import ShowtimesSection from "../layout/ShowtimesSection";
import AnimatedModal from "../ui/AnimatedModal";
import TheaterSelector from "../ui/TheaterSelector";
import { useModal } from "../../contexts/ModalContext";
import { useAnimation } from '../../hooks/useAnimation';
import styles from "./Homepage.module.css";

function AnimatedHomepage() {
  const { showModal, content } = useModal();
  const { ref, isInView, fadeInUp, slideInUp } = useAnimation();

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className={styles.homepage}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <Header />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <AnimatedCarousel />
      </motion.div>
      
      <motion.div 
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <ShowtimesSection />
      </motion.div>
      
      <AnimatePresence>
        {showModal && (
          <AnimatedModal isOpen={showModal}>
            {content}
          </AnimatedModal>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AnimatedHomepage;
