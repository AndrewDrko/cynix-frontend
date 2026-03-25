import { useSearchParams } from "react-router";
import styles from "./ShowtimeIndicator.module.css";
import ScheduleCard from "./ScheduleCard";

function ShowtimeIndicator({ showtimes }) {
  const [params] = useSearchParams();
  const queryDate = params.get("date");

  const showtimesByTheater = Object.values(
    showtimes.reduce((acc, st) => {
      const stDate = new Date(st.dateTime).toISOString().split("T")[0];

      if (stDate !== queryDate) return acc;

      const theaterId = st.theater._id;

      if (!acc[theaterId]) {
        acc[theaterId] = {
          theater: st.theater,
          showtimes: [],
        };
      }

      acc[theaterId].showtimes.push(st);

      return acc;
    }, {})
  );

  return (
    <div className={styles.showtimeIndicator}>
      <ul className={styles.scheduleList}>
        {showtimesByTheater.map((st) => (
          <li className={styles.showtimeElement} key={st.theater._id}>
            <div className={styles.cinemaInfo}>
              <h1>{st.theater.name}</h1>
              <p>{st.theater.address}</p>
            </div>

            <div className={styles.cardsContainer}>
              {st.showtimes.map((show) => (
                <ScheduleCard
                  key={show._id}
                  id={show._id}
                  schedule={show.dateTime}
                  typeScreen={show.screen.type}
                  language={show.language}
                  subtitles={show.subtitles}
                  price={show.price}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowtimeIndicator;
