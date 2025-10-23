import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: -50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const fadeInRight = {
    hidden: { 
      opacity: 0, 
      x: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.5
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5
      }
    }
  };

  const slideInUp = {
    hidden: { 
      opacity: 0, 
      y: 100
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  return {
    ref,
    isInView,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    slideInUp
  };
};
