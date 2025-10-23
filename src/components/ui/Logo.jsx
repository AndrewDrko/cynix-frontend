import logotype from "../../../public/logo-cynix.png";
import styles from "./Logo.module.css";

function Logo() {
  return <img className={styles.logo} src={logotype} alt="Cynix logotype" />;
}

export default Logo;
