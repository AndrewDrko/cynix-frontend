import { FaShop } from "react-icons/fa6";
import styles from "./FavoriteCinemasCard.module.css";
import TheaterList from "../../ui/TheaterList";
import { usePreferences } from "../../../features/preferences/usePreferences";
import { useTheaters } from "../../../features/theaters/useTheaters";

function FavoriteCinemasCard({ className }) {
  const { theaters } = useTheaters();
  const { favoriteCinemas } = usePreferences();

  const favCinemaArr = theaters.filter((c) => favoriteCinemas.includes(c._id));

  return (
    <div className={`${styles.favoriteCinemasCard} ${className}`}>
      <span className={styles.titleContainer}>
        <FaShop />
        <h2>Cines Preferidos</h2>
      </span>
      <div>
        {!favCinemaArr ||
          (favCinemaArr.length === 0 && <h3>No hay cines favoritos</h3>)}
        <TheaterList
          theaters={favCinemaArr}
          selectable={false}
          className={styles.favoriteCinemasList}
        />
      </div>
    </div>
  );
}

export default FavoriteCinemasCard;
