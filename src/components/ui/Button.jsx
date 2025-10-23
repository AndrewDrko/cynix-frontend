import styles from "./Button.module.css";

function Button({
  className = "",
  children,
  onClick,
  type = "primary",
  shape = "square",
}) {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${styles[shape]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
