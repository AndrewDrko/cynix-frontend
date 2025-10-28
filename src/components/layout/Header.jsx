import { NavLink } from "react-router";
import CinemaSelectorButton from "../ui/CinemaSelectorButton";
import PageNav from "../ui/PageNav";
import UserButton from "../ui/UserButton";
import styles from "./Header.module.css";
import Logo from "../ui/Logo";
import SearchButton from "../ui/SearchButton";
import SearchBar from "../ui/SearchBar";
import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { LuUserRound } from "react-icons/lu";

function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <PageNav />
      <div className={styles.buttonContainer}>
        <CinemaSelectorButton type="secondary" />
        <SearchBar placeholder="¿Que película buscas?" />

        {isAuthenticated && (
          <NavLink to="/me">
            <UserButton />
          </NavLink>
        )}

        {!isAuthenticated && (
          <Popover className="relative">
            <PopoverButton
              as={Button}
              shape="circle"
              type="primary"
              className={styles.popoverBtn}
            >
              <LuUserRound />
            </PopoverButton>
            <PopoverPanel
              as="div"
              className={`flex flex-col ${styles.popoverPanel}`}
              anchor="bottom"
            >
              <NavLink to="/login">
                <Button>Iniciar Sesion</Button>
              </NavLink>

              <NavLink to="/signup">
                <Button type="secondary">Registrarse</Button>
              </NavLink>
            </PopoverPanel>
          </Popover>
        )}
      </div>
    </header>
  );
}

export default Header;
