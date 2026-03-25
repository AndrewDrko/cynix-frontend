import { Outlet } from "react-router";

import styles from "./MoviesPage.module.css";
import Header from "../../layout/Header";

function MoviesPage() {
  return (
    <>
      <Header darkMode={true} />
      <div className={styles.moviesLayout}>
        <Outlet />
        {/* <MoviesGrid /> */}
      </div>
    </>
  );
}

export default MoviesPage;
