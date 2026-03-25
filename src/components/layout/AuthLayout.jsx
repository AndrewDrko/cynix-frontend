import Logo from "../ui/Logo";
import styles from "./AuthLayout.module.css";

function AuthLayout({ title = "", children }) {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <Logo />
        <h1>{title}</h1>
        {children}
        <p className={styles.legalText}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
}

export default AuthLayout;
