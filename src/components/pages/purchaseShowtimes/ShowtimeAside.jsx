import styles from "./ShowtimeAside.module.css";
import { dateFormater, timeFormater } from "../../../utils";

function ShowtimeAside({ showtime }) {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;

  return (
    <aside className={styles.aside}>
      <div className={styles.showtimeHead}>
        <img
          src={`${API_URL}${showtime.movie.posterUrl}`}
          className={styles.posterImg}
        />
        <h1>{showtime.movie.title}</h1>
        <h2>{`${showtime.movie.genre.split("/").join(",")}`}</h2>
      </div>

      <div className={styles.showtimeSpecs}>
        <div className={styles.specsContainer}>
          <span className={styles.key}>Cine</span>
          <span className={styles.val}>{showtime.theater.name}</span>
        </div>

        <div className={styles.specsContainer}>
          <span className={styles.key}>Fecha</span>
          <span className={styles.val}>{dateFormater(showtime.dateTime)}</span>
        </div>

        <div className={styles.specsContainer}>
          <span className={styles.key}>Hora</span>
          <span className={styles.val}>{timeFormater(showtime.dateTime)}</span>
        </div>

        <div className={styles.specsContainer}>
          <span className={styles.key}>Sala</span>
          <span className={styles.val}>{showtime.screen.name}</span>
        </div>
      </div>
    </aside>
  );
}

export default ShowtimeAside;
