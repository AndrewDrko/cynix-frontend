import styles from "./Tag.module.css";

function Tag({ children, className, type = "primary" }) {
  return (
    <div className={`${styles.tag} ${styles[type]} ${className}`}>
      {children}
    </div>
  );
}

export default Tag;
