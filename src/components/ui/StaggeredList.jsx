import { motion } from 'framer-motion';
import { useAnimation } from '../../hooks/useAnimation';

const StaggeredList = ({ children, className = "" }) => {
  const { ref, isInView } = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredList;
