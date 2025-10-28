import { NavLink } from "react-router";
import styles from "./Anchor.module.css";

function Anchor({ children, ref = "#", className = "", onClick }) {
  return (
    <NavLink
      onClick={onClick}
      to={ref}
      className={`${styles.anchor} ${className}`}
    >
      {children}
    </NavLink>
  );
}

export default Anchor;
