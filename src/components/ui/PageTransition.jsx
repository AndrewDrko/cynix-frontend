import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';

const PageTransition = ({ children }) => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 100,
      scale: 0.95
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    },
    out: {
      opacity: 0,
      x: -100,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="page-transition"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
