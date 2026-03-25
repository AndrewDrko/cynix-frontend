import styles from "./TheaterSelector.module.css";
import SearchBar from "./SearchBar";
import { useTheaters } from "../../features/theaters/useTheaters";
import Spinner from "./Spinner";
import TheaterList from "./TheaterList";

function TheaterSelector({ message = "" }) {
  const { theaters, status } = useTheaters();

  if (status === "loading")
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );

  return (
    <div className={styles.container}>
      {theaters && theaters.length > 0 && (
        <>
          <span>{message}</span>
          <h2>Seleccionar cine</h2>
          <SearchBar
            placeholder="Buscar cine"
            className={styles.modalSearchBar}
          />
          <TheaterList theaters={theaters} />
        </>
      )}
    </div>
  );
}

export default TheaterSelector;
