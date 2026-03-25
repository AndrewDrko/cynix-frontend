import Button from "./Button";
import styles from "./CustomToast.module.css";

function CustomToast({ message, action }) {
  return (
    <div className={styles.container}>
      <span className={styles.message}>{message}</span>
      <Button
        onClick={() => {
          action();
        }}
      >
        Iniciar Sesión
      </Button>
    </div>
  );
}

export default CustomToast;
