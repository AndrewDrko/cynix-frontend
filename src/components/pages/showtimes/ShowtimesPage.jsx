import styles from "./ShowtimesPage.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { usePreferences } from "../../../features/preferences/usePreferences";
import MovieCard from "../../ui/MovieCard";
import Spinner from "../../ui/Spinner";
import DateTabs from "./DateTabs";
import ShowtimeIndicator from "./ShowtimeIndicator";

function ShowtimesPage() {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showtimes, setShowtimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id: movieId } = useParams();
  const { selectedCinema } = usePreferences();

  useEffect(
    function () {
      async function getShowtime() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `${API_URL}/api/v1/showtime/by-movie?movie=${movieId}${
              selectedCinema ? `&theater=${selectedCinema}` : ""
            }`,
          );
          const data = await res.json();
          setShowtimes(data.data.showtimes);
          setSelectedMovie(data.data.selectedMovie);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
      getShowtime();
    },
    [API_URL, movieId, selectedCinema],
  );

  const dates = showtimes.map((date) => date.dateTime);

  if (isLoading) return <Spinner />;
  if (!showtimes || showtimes.lenght === 0)
    return <p>No se encontraron funciones</p>;

  return (
    <div className={styles.showtimesLayout}>
      {selectedMovie && (
        <MovieCard
          title={selectedMovie.title}
          posterUrl={selectedMovie.posterUrl}
          synopsis={selectedMovie.synopsis}
          classification={selectedMovie.classification}
          duration={selectedMovie.duration}
          genre={selectedMovie.genre}
        />
      )}
      {showtimes.length === 0 && <h1>No hay funciones para mostrar</h1>}
      {showtimes.length > 0 && (
        <aside className={styles.showtimesAside}>
          <h1>Funciones</h1>
          <DateTabs dates={dates} />
          <ShowtimeIndicator showtimes={showtimes} />
        </aside>
      )}
    </div>
  );
}

export default ShowtimesPage;
