import { NavLink } from "react-router";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">Cartelera</NavLink>
        </li>
        <li>
          <NavLink to="/showtimes">Funciones</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
