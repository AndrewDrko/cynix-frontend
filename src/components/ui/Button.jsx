import styles from "./Button.module.css";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      className = "",
      children,
      onClick,
      type = "primary",
      shape = "square",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref} // pasa el ref
        className={`${styles.button} ${styles[type]} ${styles[shape]} ${className}`}
        onClick={onClick}
        {...props} // pasa props adicionales como eventos del Popover
      >
        {children}
      </button>
    );
  }
);

export default Button;
