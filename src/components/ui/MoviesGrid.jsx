import { useMovies } from "../../contexts/MoviesContext";
import MovieItem from "./MovieItem";
import styles from "./MoviesGrid.module.css";
import Spinner from "./Spinner";

function MoviesGrid() {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;

  const { allMovies: movies, isLoading } = useMovies();

  if (isLoading) return <Spinner />;
  if (!movies || movies.length === 0) return <p>No hay películas.</p>;

  return (
    <div className={styles.movieLayout}>
      <h1 className={styles.header}>
        ¡Mira nuestra cartelera y descubre tu próxima película favorita!
      </h1>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieItem
            key={movie.title}
            id={movie._id}
            image={`${API_URL}${movie.posterUrl}`}
            title={movie.title}
            borderRounded={true}
            showInfo={true}
            classification={movie.classification}
            duration={movie.duration}
            genre={movie.genre}
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesGrid;
