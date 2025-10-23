import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './MovieItem.module.css';

const GestureCard = ({ movie, onClick }) => {
  const [isDragging, setIsDragging] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      rotateY: -5,
      transition: { duration: 0.1 }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.4, duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={styles.movieCard}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onClick={() => !isDragging && onClick && onClick(movie)}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      layout
    >
      <motion.div className={styles.imageContainer}>
        <motion.img
          src={movie.posterUrl}
          alt={movie.title}
          variants={imageVariants}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className={styles.playButton}
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
          >
            ▶
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div className={styles.movieInfo}>
        <motion.h3 
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ 
            color: '#ff6b6b',
            transition: { duration: 0.2 }
          }}
        >
          {movie.title}
        </motion.h3>
        
        <motion.div 
          className={styles.rating}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          ⭐ {movie.rating}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GestureCard;
