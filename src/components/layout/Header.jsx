import { NavLink } from "react-router";
import CinemaSelectorButton from "../ui/CinemaSelectorButton";
import PageNav from "../ui/PageNav";
import UserButton from "../ui/UserButton";
import styles from "./Header.module.css";
import Logo from "../ui/Logo";
import SearchButton from "../ui/SearchButton";
import SearchBar from "../ui/SearchBar";
import { useSelector } from "react-redux";

function Header() {
  const { status, error, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  console.log(user);

  return (
    <header className={styles.header}>
      <PageNav />
      <div className={styles.buttonContainer}>
        <CinemaSelectorButton />
        <SearchBar placeholder="¿Que película buscas?" />
        <NavLink to="/login">
          <UserButton />
        </NavLink>
        {isAuthenticated && <p>{user.name}</p>}
      </div>
    </header>
  );
}

export default Header;
