import { NavLink } from "react-router";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav({ className = "" }) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul>
        <li>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">Cartelera</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
